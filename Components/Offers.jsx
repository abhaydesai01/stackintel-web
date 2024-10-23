"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import cardImage from "../assets/card.png";
import cardImage2 from "../assets/card2.png";
import cardImage3 from "../assets/card3.png";
import { useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const Offers = () => {
  const headingRef = useRef(null);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);

  const isHeadingInView = useInView(headingRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isFirstCardInView = useInView(firstCardRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isSecondCardInView = useInView(secondCardRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isThirdCardInView = useInView(thirdCardRef, {
    triggerOnce: false,
    margin: "-100px",
  });

  return (
    <>
      {/* Section Heading */}
      <motion.div
        className="max-w-7xl mx-auto px-2 flex flex-col gap-y-5 md:flex-row justify-between items-center gap-x-10 mt-[6em] mb-[3em]"
        initial="hidden"
        animate={isHeadingInView ? "visible" : "hidden"}
        variants={textVariants}
        ref={headingRef}
      >
        <p className="text-4xl font-semibold">
          Offer the best cards for your customers' needs
        </p>
        <p className="text-gray-700 text-lg">
          We are dedicated to providing unique and enriching experiences when it
          comes to global payments.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-2 py-10 z-[999]">
        {/* First Card */}
        <motion.div
          className="bg-green-50 border-2 border-green-200 rounded-[20px] p-4 md:p-8 mb-10 flex flex-col lg:flex-row justify-between items-start"
          initial="hidden"
          animate={isFirstCardInView ? "visible" : "hidden"}
          variants={imageVariants}
          ref={firstCardRef}
        >
          <motion.div className="max-w-lg" variants={textVariants}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Processing at <br />
              Ultimate Speed
            </h2>
            <p className="text-gray-600">
              Experience lightning-fast transactions and seamless processing
              with our platform. We optimize every process to ensure the fastest
              and most reliable service for our users. No delays, just results.
              Join us and experience a new standard of efficiency.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-[50%] mt-6 lg:mt-0"
            variants={imageVariants}
          >
            <Image
              src={cardImage}
              alt="Processing speed"
              className="rounded-lg h-auto w-[100%]"
            />
          </motion.div>
        </motion.div>

        {/* Second and Third Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Second Card */}
          <motion.div
            className="bg-purple-50 border-2 border-purple-200 rounded-[20px] p-4 md:p-8 py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-x-6"
            initial="hidden"
            animate={isSecondCardInView ? "visible" : "hidden"}
            variants={imageVariants}
            ref={secondCardRef}
          >
            <motion.div className="md:w-[50%]" variants={textVariants}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Security and Privacy
              </h2>
              <p className="text-gray-600">
                We prioritize your security and privacy, ensuring that your data
                is safe and protected. With advanced encryption and secure
                protocols, your information is always in safe hands.
              </p>
            </motion.div>
            <motion.div
              className="lg:w-[50%] mt-6 lg:mt-0"
              variants={imageVariants}
            >
              <Image
                src={cardImage2}
                alt="Security and Privacy"
                className="rounded-lg h-auto w-[100%]"
              />
            </motion.div>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="bg-orange-50 border-2 border-orange-200 rounded-[20px] p-4 md:p- flex flex-col lg:flex-row md:justify-between items-start gap-x-6"
            initial="hidden"
            animate={isThirdCardInView ? "visible" : "hidden"}
            variants={imageVariants}
            ref={thirdCardRef}
          >
            <motion.div className="lg:w-[50%]" variants={textVariants}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Rich and Real Insights
              </h2>
              <p className="text-gray-600">
                Unlock the power of data with our in-depth insights and
                analytics. Gain valuable information and make informed decisions
                with our detailed reports and user-friendly dashboards.
              </p>
            </motion.div>
            <motion.div className="lg:w-[50%]" variants={imageVariants}>
              <Image
                src={cardImage3}
                alt="Rich and Real Insights"
                className="rounded-lg h-auto w-[100%]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Offers;
