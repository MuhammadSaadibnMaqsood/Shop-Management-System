import QRCode from "qrcode";
import productModel from "../models/product.js";
import bookingModel from "../models/booking.js";

//FUNCTION TO CREATE A NEW BOOKING
export async function createBooking(req, res) {
  try {
    const productId = req.params.id;

    const { address, paymentType, img, quantity } = req.body;
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
      quantity: quantity,
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
// FUNCTION TO GET ALL ORDERS

export async function getBooking(req, res) {
  try {
    const customerId = req.user._id;

    if (!customerId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Find all bookings for this customer
    const orders = await bookingModel.find({ customer: customerId });

    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error Fetching booking:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

//CHANGE PAYMENT STATUS
export async function changeStatus(req, res) {
  try {
    const { id } = req.body;   // req.body se sirf id nikalo

    if (!id) {
      return res.status(401).json({ message: "Un-authorize" });
    }

    // findOne({_id: id}) ya direct findById use karo
    const order = await bookingModel.findById(id);
    if (!order) {
      return res.status(404).json({ message: "No such Order found" });
    }

    order.paymentStatus = "COMPLETED";
    await order.save();

    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Error Change booking status:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

