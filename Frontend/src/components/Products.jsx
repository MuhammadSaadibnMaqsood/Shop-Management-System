import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const Products = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { amount: 0.5 });
  const [scrollDirection, setScrollDirection] = useState("down");
  const prevScrollY = useRef(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll tracking for text size animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation for scroll progress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Text size transformation based on scroll with smooth spring
  const fontSize = useTransform(
    smoothScroll,
    [0, 0.5, 1],
    ["2rem", "4.5rem", "3rem"]
  );
  const scale = useTransform(smoothScroll, [0, 0.5, 1], [0.8, 1.2, 1]);
  const y = useTransform(smoothScroll, [0, 1], [50, -50]);

  // Sample product images
  const products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s",
    },
    {
      id: 4,
      name: "Product 4",
      image:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current + 5) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY.current - 5) {
        setScrollDirection("up");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  return (
    <div ref={sectionRef} className="bg-zinc-950 min-h-screen py-20 px-5">
      <section className="mx-auto">
        <motion.h1
          ref={headingRef}
          style={{
            fontSize,
            scale,
            y,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView ? 1 : scrollDirection === "up" ? 0 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="tekturFont p-3 sm:p-0 text-center font-bold text-white mb-10"
        >
          PRODUCTS WE HAVE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mt-10 text-white text-lg mb-16"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          blanditiis ratione possimus praesentium quibusdam quos esse vel
          obcaecati repellendus exercitationem dolores.
        </motion.p>

        {/* HIDDEN FOR NOW  */}
        <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1, ease: "easeOut" }}
              className="h-80 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-xl font-semibold text-gray-800">
                Product {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={product.image}
                  className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={product.name}
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                  {product.name}
                </div>
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-current={index === currentSlide}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={goToPrevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={goToNextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
