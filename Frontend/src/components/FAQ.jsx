import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, PayPal, and Cash on Delivery for selected regions.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 3-5 business days depending on your location.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, you can return or exchange a product within 7 days if it meets our return policy.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer worldwide shipping. Shipping costs and delivery times vary by destination.",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-950 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="text-center hover:scale-110 transition-all text-7xl p-3 sm:p-5 md:p-8 md:text-9xl AsimovianFont text-white"
      >
        FAQ
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-6 md:p-10"
      >
        {/* <p className="text-indigo-600 text-sm font-medium">FAQ's</p> */}
        <h1 className="text-3xl font-semibold">Shopping Questions</h1>
        <p className="text-sm text-slate-500 mt-2 pb-4">
          Find quick answers to the most common questions about payments,
          shipping, and returns.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-slate-200 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">{faq.question}</h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="#1D293D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
