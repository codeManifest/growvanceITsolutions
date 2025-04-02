import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } });
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;