"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { RevealSectionProps } from "./revealSection.types";
import { useEffect, useRef } from "react";

export const fadeIn = (position: string, delay: number) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay ? delay : 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className,
  position,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn(position, delay)}
      initial="hidden"
      animate={controls}
      exit="hidden"
      transition={{ duration: 0.8, delay: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
