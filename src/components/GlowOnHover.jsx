import { motion } from "framer-motion";

export default function GlowOnHover({ children, className = "" }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* steady glow */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/40 blur-xl"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.7,
          },
          hover: {
            opacity: 0.6,
            scale: 1.2,
          },
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      />

      {/* content */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
