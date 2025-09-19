import useGetOrders from "../hooks/useGetOrders";
import { motion } from "framer-motion";

export const Orders = () => {
  const { data: orders, isLoading, isError } = useGetOrders();
  // console.log(orders);

  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-zinc-950 text-white">
        <p className="text-lg animate-pulse">Loading Orders...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-zinc-950 text-red-500">
        <p>Failed to load orders. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] bg-zinc-950 text-white p-6">
      <div className="pt-3 py-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-5xl sm:text-6xl md:text-8xl AsimovianFont font-bold tracking-widest relative"
        >
          My Orders
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-5xl sm:text-6xl md:text-8xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
          >
            My Orders
          </motion.span>
        </motion.h1>
      </div>
      {orders && orders.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order, index) => (
            <motion.div
              key={order._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="w-full h-44 overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  src={order.productImg}
                  alt={order.name}
                />
              </div>

              {/* Order Details */}
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-semibold text-lg">{order.name}</p>
                <p className="text-gray-300">📍 Address: {order.address}</p>
                <p className="text-gray-300">
                  🗓 Order Date: {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-300">🔢 Quantity: {order.quantity}</p>
                <p className="text-gray-300">
                  🛡 Warranty:{" "}
                  {order.warrantyExpiry
                    ? new Date(order.warrantyExpiry).toLocaleDateString()
                    : "No warranty"}
                </p>
                <p
                  className={`font-medium ${
                    order.paymentStatus === "Paid"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  💳 Payment Status: {order.paymentStatus}
                </p>
              </div>

              {/* QR Code */}
              {order.qrCode && (
                <div className="flex justify-center mt-4">
                  <img
                    className="w-24 h-24 border border-gray-700 rounded-lg p-1 bg-white"
                    src={order.qrCode}
                    alt="qr-code"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[70vh]">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out text-5xl sm:text-6xl md:text-8xl AsimovianFont font-bold tracking-widest relative"
          >
            No Orders Found
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
              className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-5xl sm:text-6xl md:text-8xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
            >
              No Orders Found
            </motion.span>
          </motion.h1>
        </div>
      )}
    </div>
  );
};
