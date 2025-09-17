import QRCode from "qrcode";
import productModel from "../models/product.js";
import bookingModel from "../models/booking.js";


//FUNCTION TO CREATE A NEW BOOKING
export async function createBooking(req, res) {
  try {
    const productId = req.params.id;
    const { address, paymentType, img } = req.body;
    const customer = req.user._id;
    if (!address || !paymentType || !img) {
      return res
        .status(400)
        .json({ message: "Address and payment type is required" });
    }
    if (!customer || !productId) {
      return res
        .status(400)
        .json({ message: "Customer and product ID is required" });
    }
    // Fetch product details
    const product = await productModel.findById(productId).populate("shopId");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.stock <= 0) {
      return res.status(400).json({ message: "Product is out of stock" });
    }

    const warrantyExpiry = new Date();
    warrantyExpiry.setMonth(warrantyExpiry.getMonth() + product.warranty);

    const warrantyPeriod = product.warranty || 0; // Default to 0 if not specified

    const warrantyData = {
      customer: customer.toString(),
      productName: product.productName,
      price: product.price,
      warrantyPeriod: `${warrantyPeriod} months`,
      warrantyExpiry: warrantyExpiry.toDateString(),
    };

    const qrCode = await QRCode.toDataURL(JSON.stringify(warrantyData));
    // Create a new booking
    const newBooking = new bookingModel({
      customer: req.user._id,
      shop: product.shopId._id,
      product: product._id,
      address: req.body.address,
      paymentType: req.body.paymentType,
      productImg: img,
      warrantyExpiry: warrantyExpiry,
      qrCode: qrCode,
    });
    await newBooking.save();
    // Decrease product stock by 1
    product.stock -= 1;
    await product.save();
    // Increase product totalSell by 1
    product.totalSell += 1;
    await product.save();

    return res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
