import { motion as m, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import mountain1 from "/mountain1.jpg";
import mountain2 from "/mountain2.jpg";

export default function Second() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.05 1", "end start"],
  });

  const widthPic = useTransform(scrollYProgress, [0, 0.2], ["100%", "65%"]);
  const opacityIn = useTransform(scrollYProgress, [0.3, 0.7, 1], [0, 0.5, 0]);
  const picIn = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1]);
  const picOut = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);

  const scaleIn1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.2, 0.2, 1]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="h-[200vh] max-w-6xl flex mx-auto relative contain-layout"
    >
      <m.div style={{ opacity: opacityIn}} className="soft-grass contain-layout absolute top-1/2 right-0 translate-x-2/3 aspect-square h-screen rounded-full blur-2xl -z-10"></m.div>
      <m.div style={{opacity: opacityIn}} className="everlasting-sky contain-layout absolute left-0 aspect-square h-1/2 top-1/2 -translate-y-1/2 -translate-x-3/4 rounded-full blur-3xl -z-10"></m.div>
      <div  className="sticky w-full top-1/2 h-min flex">
        <m.div style={{width: widthPic}} className="w-full origin-right relative ml-auto -translate-y-1/2 rounded-3xl">
          <m.img style={{opacity: picOut}} src={mountain1} alt="mountain" className="rounded-3xl object-cover" />
          <m.img style={{opacity: picIn}} src={mountain2} alt="" className="rounded-3xl object-cover absolute inset-0"/>
        </m.div>
      </div>
      <div className="absolute left-0 w-[35%] -top-[10%] bottom-0">
        <div className="w-full h-[60%] relative -mb-[20%]">
        <div className="sticky h-screen grid place-items-center w-full top-0">
          <m.h2 style={{opacity: fadeIn}} className="font-bodoni-moda text-dark text-3xl">
            This is a <span className="tracking-widest font-semibold">Mountain</span>
          </m.h2>
        </div>
        </div>

        <m.div style={{scale: scaleIn1, opacity: scaleIn1}} className="w-full h-[50%] relative">
        <div className="sticky h-min grid place-items-center w-full top-[50vh] font-bodoni-moda text-dark text-3xl">
            This is Another <span className="tracking-widest font-semibold">Mountain</span>
        </div>
        </m.div>

      </div>
    </section>
  );
}
