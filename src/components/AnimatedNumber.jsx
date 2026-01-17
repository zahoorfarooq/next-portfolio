'use client';

import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const AnimatedNumber = ({ number, duration = 3000 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { 
    damping: 60,
    mass: 1,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  return (
    <span 
      ref={ref} 
      suppressHydrationWarning
    >
      {spring}
    </span>
  );
};

export default AnimatedNumber;
