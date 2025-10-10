import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width = "w-full", start = false, para = false, hover = false }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover ? "#7443ff" : "#3E3E46",
        padding: "25px",
        scale: 1.03,
        transition: { duration: 0.4, ease: "easeInOut" },
        boxShadow: hover
          ? "0px 15px 35px rgba(116, 67, 255, 0.2)"
          : "0px 15px 25px rgba(0, 0, 0, 0.2)",
      }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between transition-all duration-300 cursor-pointer`}
    >
      {/* Top Section */}
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm text-zinc-300">
            {start ? "Get In Touch" : "Up Next: News"}
          </h3>
          <IoIosArrowRoundForward size={"1.4rem"} className="text-white" />
        </div>
        <h1 className={`text-3xl font-regular mt-5 ${start ? "w-full" : "w-2/3"}`}>
          {start ? "Let's do it, together." : "Insights and behind the scenes"}
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="down w-full mt-8">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-tight">
              Start Your Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-300 font-light mt-2">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
