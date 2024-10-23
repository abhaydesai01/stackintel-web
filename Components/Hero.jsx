"use client";

import Image from "next/image";
import businessCardImage from "../assets/hero/Container.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-between">
      {/* Background Images */}
      <div
        className="absolute inset-0 -z-[1] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/Component1-1.png'), url('/Component1.png')",
          backgroundPosition: "left top, right bottom",
          backgroundSize: "contain, contain",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-2 md:px-4 relative z-10 px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content - Text Section */}
        <motion.div
          className="max-w-lg mb-10 lg:mb-0 lg:-mt-[6em]"
          initial={{ opacity: 0, y: 50 }} // Start hidden and moved down
          animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 1.2, ease: "easeOut" }} // Control the speed and easing
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-family/font 1 text-gray-900 mb-6">
            Simplify, Secure, <br /> Succeed.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Our Platform is unparalleled in its flexibility. Remain at the
            forefront of payments by issuing cards of any kind, and delivering
            innovations as and when you need them.
          </p>
          <div className="flex flex-col md:flex-row space-x-4">
            <a
              href="#"
              className="bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-full text-center shadow-sm hover:shadow-lg transition"
            >
              Let's talk to an expert →
            </a>
            <a
              href="#"
              className="text-gray-700 text-center hover:text-gray-900 px-6 py-3"
            >
              Get Documentation →
            </a>
          </div>
        </motion.div>

        {/* Right Column - Image Section */}
        <motion.div
          className="relative w-full lg:w-[70%] "
          initial={{ opacity: 0, x: 100 }} // Start hidden and moved right
          animate={{ opacity: 1, x: 0 }} // Animate to visible and original position
          transition={{ duration: 1.2, ease: "easeOut" }} // Control the speed and easing
        >
          <Image
            src={businessCardImage}
            alt="Business Digital Card"
            className="h-auto w-[100%]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
