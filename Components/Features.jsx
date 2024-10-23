"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import FeatureImage from "../assets/section.png";
import cardImage4 from "../assets/card4.png";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const Features = () => {
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);

  const isFirstCardInView = useInView(firstCardRef, { triggerOnce: false });
  const isSecondCardInView = useInView(secondCardRef, { triggerOnce: false });
  const isThirdCardInView = useInView(thirdCardRef, { triggerOnce: false });

  return (
    <div className="w-full lg:w-[95%] mx-auto px-4 -z-[1] flex flex-col justify-center mt-[14em] mb-[20em] items-center h-auto bg-gray-50 border-2 border-gray-200 rounded-[20px]">
      <div className="flex flex-col justify-start items-start max-w-7xl mx-auto gap-y-[6em]">
        {/* First Card */}
        <motion.div
          className="bg-[#2634BB] text-white rounded-[20px] -mt-[14em] flex flex-col lg:flex-row justify-center lg:justify-between items-start"
          ref={firstCardRef}
          initial="hidden"
          animate={isFirstCardInView ? "visible" : "hidden"}
        >
          <motion.div className="my-[4em] px-6 lg:px-8" variants={textVariants}>
            <h2 className="text-3xl font-semibold mb-4">
              Unlock Global Opportunities
            </h2>
            <p className="mb-6">
              Empower your business with global reach and unparalleled
              opportunities. Whether it's cross-border payments or expanding
              into new markets, we provide the tools you need to grow.
            </p>
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg">
              Learn More
            </button>
          </motion.div>
          <motion.div className="w-[100%]" variants={imageVariants}>
            <Image
              src={cardImage4}
              alt="Global Opportunities"
              className="rounded-lg h-auto w-[100%]"
            />
          </motion.div>
        </motion.div>

        {/* Second Section: Text with List and Image */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start gap-x-10"
          ref={secondCardRef}
          initial="hidden"
          animate={isSecondCardInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col justify-start items-start w-full lg:w-[50%]"
            variants={textVariants}
          >
            <div className="px-2">
              <h1 className="text-3xl font-medium">
                With us <br /> you can do it all
              </h1>
              <p className="pt-4 pb-8">
                Our Platform is unparalleled in its flexibility. Remain at the
                forefront of payments by issuing cards of any kind, and
                delivering innovations as and when you need them.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start border-l-2 border-gray-700 pl-4">
              {/* List Items */}
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  className="flex flex-col justify-start items-start mb-4"
                  key={index}
                >
                  <h6 className="text-2xl font-medium flex justify-start items-start">
                    <span className="text-sm pt-1 mr-2">{`0${item}.`}</span>
                    Prepaid and Debit Cards
                  </h6>
                  <p className="text-gray-600 pl-6 pt-2">
                    We issue prepaid and debit cards under one platform.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-[100%] flex justify-center items-center lg:w-[30%]"
            variants={imageVariants}
          >
            <Image
              src={FeatureImage}
              alt="feature image"
              height={800}
              width={800}
              className="h-auto w-[90%] pt-6 lg:pt-0 lg:w-[100%]"
            />
          </motion.div>
        </motion.div>

        {/* Third Section: Full Width Card */}
        <motion.div
          className="flex flex-col justify-between items-start -mb-[12em] w-full bg-blue-700 rounded-[20px] px-6 py-8 lg:px-12 lg:py-16 text-white"
          ref={thirdCardRef}
          initial="hidden"
          animate={isThirdCardInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col justify-start gap-y-[2em] md:gap-y-[4em]"
            variants={textVariants}
          >
            <h1 className="text-4xl lg:text-5xl font-normal">
              Easy Issue, manage <br /> & process, prepaid & debit <br />
              programmes, at scale.
            </h1>
            <div className="flex flex-col justify-start md:flex-row md:justify-center lg:items-center gap-x-10 gap-y-4">
              <p>24/7 support</p>
              <p>Financial Empowerment</p>
              <p>Personalised Guidance</p>
            </div>
            <div className="flex flex-row items-center gap-x-4">
              <button className="bg-white text-blue-800 px-6 py-2 rounded-full">
                Use Cases
              </button>
              <button className="border border-white text-white px-6 py-2 rounded-full">
                Use Cases
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
