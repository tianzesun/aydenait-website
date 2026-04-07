import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-40 w-[300px] h-[300px] rounded-full blur-[100px] bg-cyan-500 opacity-20"
      animate={{
        x: mousePosition.x - 150,
        y: mousePosition.y - 150,
        opacity: isVisible ? 0.2 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 30,
        mass: 0.1
      }}
    />
  );
};

export default CursorGlow;