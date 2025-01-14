"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { Box, MoveUpRight } from "lucide-react";
import { partnerLogos } from "./hero-data";

export function Hero() {
  return (
    <>
      <section id="home" className=" min-h-screen pt-24  bg-white">
        <motion.div
          className="absolute -left-12 top-48  z-1 hidden  xl:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={"/hero-vector.png"}
            alt={"hero-vector"}
            className="xl:max-w-[650px] 2xl:max-w-[780px] "
          />
        </motion.div>
        <main className="container pt-16 text-center">
          <div className="relative">
            <motion.h1
              className="font-gilroyBold font-extrabold heading blue_gradient z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>
                We drive
                <br />
                innovation
              </h1>
            </motion.h1>

            <motion.div
              className="absolute -z-10 left-0 right-0 bottom-0 h-[300px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-20" />
            </motion.div>
          </div>

          <motion.p
            className="font-gilroyRegular text-amber-500 font-medium subheading max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Empowering businesses through data-driven insights and automation to
            achieve unparalleled growth. Our automation solutions are built to
            revolutionize industries, improve productivity, and drive
            innovation.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-blue-600 text-white  hover:bg-blue-600/80 font-gilroyRegular font-semibold text-base px-3 py-6">
              Explore Our Solutions
              <MoveUpRight className="ml-2" size={48} strokeWidth={3} />
            </Button>
            <Button
              variant="outline"
              className=" border-amber-400 text-base text-amber-500  hover:bg-amber-500 hover:text-white font-gilroyRegular font-semibold px-3 py-6 "
            >
              Book a Demo
              <Box className="ml-2" size={48} strokeWidth={2} />
            </Button>
          </motion.div>
          <motion.p
            className="mt-20 text-blue-600 font-gilroyRegular font-medium md:text-2xl text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Trusted by Leading Companies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="my-4 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
          >
            <motion.div
              className=" flex gap-14 flex-none justify-center items-center pr-14"
              animate={{ translateX: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
                repeatType: "loop",
                delay: 0.7,
              }}
            >
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="md:max-w-[140px] max-w-[110px] h-auto "
                />
              ))}
            </motion.div>
          </motion.div>
        </main>
      </section>
    </>
  );
}
