import { motion } from "framer-motion";
import "./FloatingCubes.css";

const cubeCount = 16;

const FloatingCubes = () => {
  return (
    <div className="floating-cubes-wrapper">
      {Array.from({ length: cubeCount }).map((_, i) => (
        <motion.div
          key={i}
          className="floating-cube"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["-18px", "18px", "-18px"],
            rotateX: [0, 360],
            rotateY: [360, 0],
          }}
          transition={{
            duration: 14 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCubes;
