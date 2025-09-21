import React, { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-screen w-full relative bg-black text-white flex flex-col xl:flex-row  items-center p-12 xl:p-0 justify-start xl:justify-center"
      >
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{
            opacity: { duration: 0.7, delay: 2 },
            y: { duration: 0.7, delay: 2 },
          }}
          whileHover={{ scale: 1.05 }}
          className="h-full object-contain hidden xl:block"
          src="/shoe4.webp"
          alt="shoe"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center group hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out md:text-9xl text-9xl static xl:absolute xl:top-20 xl:right-25 AsimovianFont drop-shadow-[0_5px_15px_rgba(200,0,200,0.3)]"
        >
          AURA
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#c6005c] to-[#4a00b8] transition-all duration-700 ease-in-out absolute AsimovianFont left-0 right-0 top-full text-9xl  md:text-9xl font-bold tracking-widest text-gray-400 transform scale-y-[-1] blur-sm select-none"
          >
            AURA
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="static pt-20 xl:p-0 xl:absolute top-60 left-30 w-full text-center xl:w-96 text-gray-300 leading-relaxed"
        >
          This role-based e-commerce platform allows customers to explore and
          purchase products effortlessly, while shop owners and admins can
          manage shops, products, and orders with ease, ensuring a smooth and
          personalized shopping experience.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-6 md:px-12 lg:px-20 py-12 text-white bg-zinc-950 min-h-screen"
      >
        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-pink-500 text-4xl mb-4">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-400">
                We carefully select each product to ensure it meets our high
                standards of quality and durability.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-pink-500 text-4xl mb-4">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-400">
                Your satisfaction is our priority. We listen to feedback and
                continuously improve our services.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-pink-500 text-4xl mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-400">
                We're committed to ethical sourcing and reducing our
                environmental impact through eco-friendly practices.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-gray-400 text-lg">
              The passionate people behind{" "}
              <span className="font-semibold">MS-SHOPS</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                alt="Michael Johnson"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Michael Johnson</h3>
                <p className="text-pink-500 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-400 text-sm">
                  With over 15 years in e-commerce, Michael founded MS-SHOPS
                  with a vision to create a customer-centric shopping platform.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Sarah Ahmed"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Sarah Ahmed</h3>
                <p className="text-pink-500 font-medium mb-3">
                  Head of Product
                </p>
                <p className="text-gray-400 text-sm">
                  Sarah curates our product selection, ensuring we offer the
                  latest trends and highest quality items to our customers.
                </p>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                alt="Hamza"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Hamza</h3>
                <p className="text-pink-500 font-medium mb-3">
                  Customer Experience
                </p>
                <p className="text-gray-400 text-sm">
                  Hamza leads our customer support team, ensuring every shopper
                  has a seamless and satisfying experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
