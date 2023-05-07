import React, { useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.3,
      stiffness: 50,
    },
  },
};

const item = {
  hidden: { y: "100%" },
  show: { y: "0", overflow: "hidden" },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "center start"],
  });

  const opacityOut = useTransform(scrollYProgress, [0, 0.5], [0.5, 0]);
  const scaleOut = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <m.section
      variants={container}
      initial="hidden"
      animate="show"
      ref={containerRef}
      aria-labelledby="the-nature-title"
      className="h-screen w-full relative  font-bodoni-moda -mb-[10vh] max-w-6xl flex mx-auto"
    >
      <m.div
        style={{ opacity: opacityOut }}
        className="soft-grass absolute top-0 left-0 -translate-x-2/3 aspect-square h-screen rounded-full blur-2xl -z-10"
      ></m.div>
      <m.div
        style={{ opacity: opacityOut }}
        className="everlasting-sky absolute right-0 aspect-square h-1/2 top-1/3 -translate-y-1/2 translate-x-3/4 rounded-full blur-3xl -z-10"
      ></m.div>
      <m.div
        style={{ "--opacity": opacityOut, scale: scaleOut }}
        className="sticky flex-col items-center mt-10 w-full text-center h-min top-10 opacity-[calc(var(--opacity,1)*2)]"
      >
        <m.h1
          variants={item}
          id="the-nature-title"
          className="text-7xl  font-light text-dark overflow-hidden"
        >
          The Nature
        </m.h1>
        <m.p
          variants={item}
          className="text-dark opacity-90 text-xl mt-1 font-semibold italic"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          praesentium cupiditate temporibus vel dolorum quo.
        </m.p>
        <m.button className="mt-10 animate-bounce-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="18 14 12 20 6 14" />
          </svg>
        </m.button>
      </m.div>
    </m.section>
  );
}
