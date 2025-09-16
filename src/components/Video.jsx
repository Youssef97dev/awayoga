"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi2";

const Video = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <video className="object-cover h-full w-full" autoPlay loop muted>
          <source src="/awayoga.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className={`absolute top-6 w-full flex flex-col justify-center items-end pr-4 z-50  gap-2  text-black`}
        >
          <button
            onClick={() => setOpen((prev) => !prev)}
            className={` rounded-full p-2 ${
              open ? "bg-transparent" : "bg-background"
            }`}
          >
            <HiOutlinePlus size={20} />
          </button>
          {!open && (
            <span className="uppercase text-white text-[12px] text-center">{`About`}</span>
          )}
        </div>
        {/* Popup */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-6  bg-background text-black mx-4 px-6 pt-10 pb-16 shadow-lg z-40 "
            >
              <header className="text-center mb-8">
                <b className="text-[16px] whitespace-nowrap leading-tight">
                  🌸✨ AWAYOGA Retreat in Marrakech ✨🌸
                </b>
              </header>

              <div className="text-left space-y-6 text-lg md:text-xl">
                <p className="text-[18px] md:text-3xl">
                  📅 November 20 — 23 · 📍{" "}
                  <span className="underline">Riad Pure House Marrakech</span>
                </p>

                <div className="space-y-3">
                  <p className="text-[20px] md:text-2xl font-semibold">
                    4 magical days to reconnect with yourself:
                  </p>

                  <ul className="list-none space-y-2 mt-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[18px]">🧘‍♀️</span>
                      <span>Daily yoga &amp; meditation</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[18px]">🥗</span>
                      <span>Conscious &amp; traditional Moroccan food</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[18px]">🏡</span>
                      <span>
                        Stay in the beautiful{" "}
                        <strong>Riad Pure House Marrakech</strong>
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-[18px]">☀️</span>
                      <span>Time to rest &amp; explore the Red City</span>
                    </li>
                  </ul>
                </div>

                <p className="text-[18px] font-medium">
                  ✨ All included (except flights) ✨
                </p>

                <p className="text-lg md:text-xl">
                  For more details contact Awa: <br />
                  <span className="font-bold">+34 650 759 386</span> 💫
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Video;
