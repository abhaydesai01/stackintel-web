"use client";

import Image from "next/image";
import sectionImage from "../public/Section.png";
import yellowCardImage from "../public/yellowcard.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

  return (
    <div>
      <section className="bg-[#2634BB]">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-x-[2em] justify-between overflow-hidden"
        >
          <div className="w-[95%] lg:w-[30%] lg:ml-[8em] my-[4em] md:my-[7em] lg:my-[12em]">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold tracking-wider text-white"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              custom={0}
            >
              Our scalable, flexible Platform supports big innovations.
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-4xl font-semibold tracking-wider text-white"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              custom={1}
            >
              We shepherd our clients not only into,
            </motion.h2>
            <motion.h2
              className="text-3xl md:text-4xl font-semibold tracking-wider text-white"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              custom={2}
            >
              but to the forefront of the Digital-payment Era.
            </motion.h2>
          </div>

          <motion.div className="relative">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <Image
                src={sectionImage}
                alt="Business Digital Card"
                className="max-w-full -mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="absolute top-[10px] lg:top-[160px] lg:-left-[100px]"
            >
              <Image
                src={yellowCardImage}
                alt="Yellow Card"
                className="h-auto w-[60%] lg:w-[100%] "
                width={700}
                height={700}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section;
