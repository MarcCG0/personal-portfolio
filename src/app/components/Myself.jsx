"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="text-2xl sm:text-4xl lg:text-7xl">{/* Adjust font sizes here */}
            <TypeAnimation
              sequence={[
                "Marc",
                700,
                "Data Scientist",
                700,
                "SW Engineer",
                700,
                "ML Engineer",
                700,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </span>
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
  <span className="group text-gray-500 hover:text-white">A</span>{" "}
  <span className="group text-gray-500 hover:text-white">passionate</span>{" "}
  <span className="group text-gray-500 hover:text-white">data</span>{" "}
  <span className="group text-gray-500 hover:text-white">science</span>{" "}
  <span className="group text-gray-500 hover:text-white">student</span>{" "}
  <span className="group text-gray-500 hover:text-white">based</span>{" "}
  <span className="group text-gray-500 hover:text-white">in</span>{" "}
  <span className="group text-gray-500 hover:text-white">Barcelona,</span>{" "}
  <span className="group text-gray-500 hover:text-white">dedicated</span>{" "}
  <span className="group text-gray-500 hover:text-white">to</span>{" "}
  <span className="group text-gray-500 hover:text-white">transforming</span>{" "}
  <span className="group text-gray-500 hover:text-white">complex</span>{" "}
  <span className="group text-gray-500 hover:text-white">data</span>{" "}
  <span className="group text-gray-500 hover:text-white">into</span>{" "}
  <span className="group text-gray-500 hover:text-white">innovative</span>{" "}
  <span className="group text-gray-500 hover:text-white">solutions</span>{" "}
  <span className="group text-gray-500 hover:text-white">with</span>{" "}
  <span className="group text-gray-500 hover:text-white">a</span>{" "}
  <span className="group text-gray-500 hover:text-white">continuous</span>{" "}
  <span className="group text-gray-500 hover:text-white">zeal</span>{" "}
  <span className="group text-gray-500 hover:text-white">for</span>{" "}
  <span className="group text-gray-500 hover:text-white">learning</span>{" "}
  <span className="group text-gray-500 hover:text-white">and</span>{" "}
  <span className="group text-gray-500 hover:text-white">excellence</span>{" "}
  <span className="group text-gray-500 hover:text-white">in</span>{" "}
  <span className="group text-gray-500 hover:text-white">the</span>{" "}
  <span className="group text-gray-500 hover:text-white">dynamic</span>{" "}
  <span className="group text-gray-500 hover:text-white">world</span>{" "}
  <span className="group text-gray-500 hover:text-white">of</span>{" "}
  <span className="group text-gray-500 hover:text-white">data.</span>
</p>



<div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
  <Link
    href="/#contact"
    className="px-6 py-3 w-full sm:w-fit rounded-full mb-4 sm:mb-0 bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-white transform transition-transform hover:scale-105"
  >
    Hire Me
  </Link>
  <Link
    href="/Marc_CV.pdf"
    //download="CV.pdf"
    target="_blank"
    className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-white transform transition-transform hover:scale-105"
  >
    Download CV
  </Link>
</div>




        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative mx-auto sm:ml-auto rounded-full overflow-hidden hover:scale-110 transition-transform duration-300" style={{ border: "4px solid linear-gradient(to bottom right, #06B6D4, #10B981)" }}>
  <Image
    src="/images/myself.png"
    alt="Marc Camps"
    width={300}
    height={300}
  />
</div>





        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
