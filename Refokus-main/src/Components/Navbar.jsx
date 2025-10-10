import React, { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const menuItems = ["Home", "Work", "Culture", "", "News"];

  return (
    <div className="max-w-screen-xl py-6 px-4 mx-auto flex items-center justify-between border-b border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Refokus Logo"
          className="h-6 w-auto"
        />
        <div className="links flex gap-12 ml-16">
          {menuItems.map((item, index) =>
            item === "" ? (
              <span
                key={index}
                className="w-[2px] h-7 bg-zinc-700"
              ></span>
            ) : (
              <button
                key={index}
                onClick={() => setActiveLink(item)}
                className={`relative text-sm flex items-center gap-1 font-medium transition-all duration-300 hover:text-green-400 ${
                  activeLink === item ? "text-green-400" : "text-white"
                }`}
              >
                {/* Animated green dot */}
                <span
                  className={`absolute -left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                    activeLink === item
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                >
                  <span
                    className="block w-[6px] h-[6px] bg-green-500 rounded-full"
                    style={{ boxShadow: "0 0 0.45rem #00FF19" }}
                  ></span>
                </span>

                {/* Link Text */}
                <span className="relative group">
                  {item}
                  {/* Underline on hover */}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
