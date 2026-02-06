import { motion } from "framer-motion";
import { Server, Database, KeyRound, Globe } from "lucide-react";

const icons = [
  {
    Icon: Server,
    radius: 120,
    duration: 28,
    size: 34,
    offset: 0,
  },
  {
    Icon: Database,
    radius: 160,
    duration: 36,
    size: 36,
    offset: 90,
  },
  {
    Icon: Globe,
    radius: 140,
    duration: 32,
    size: 32,
    offset: 180,
  },
  {
    Icon: KeyRound,
    radius: 95,
    duration: 22,
    size: 30,
    offset: 270,
  },
];

export default function TechOrbitLucide() {
  return (
    <div className="relative w-[360px] h-[360px] rounded-full">
      {/* faint circular hint */}
      <div className="absolute inset-0 rounded-full border border-indigo-500/10 dark:border-indigo-400/10" />

      {icons.map(({ Icon, radius, duration, size, offset }, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: offset }}
          animate={{ rotate: offset + 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="
              flex items-center justify-center
              rounded-full
              bg-white/70 dark:bg-gray-900/70
              border border-indigo-500/20 dark:border-indigo-400/20
              text-indigo-500 dark:text-indigo-400
              backdrop-blur
              opacity-70
            "
            style={{
              width: size + 18,
              height: size + 18,
              transform: `translateX(${radius}px)`,
            }}
            whileHover={{
              scale: 1.18,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 16,
            }}
          >
            <Icon size={size} strokeWidth={1.6} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
