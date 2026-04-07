import { useRef } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  className?: string;
}

const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.1
  });

  if (isInView) {
    spring.set(value);
  }

  return (
    <motion.span ref={ref} className={className}>
      {spring}
    </motion.span>
  );
};

export default AnimatedCounter;