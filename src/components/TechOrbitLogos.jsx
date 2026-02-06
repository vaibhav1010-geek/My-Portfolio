import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiOpenjdk,
} from "react-icons/si";

const techs = [
  { Icon: SiNodedotjs, radius: 120, duration: 28, size: 36, offset: 0 },
  { Icon: SiMongodb, radius: 160, duration: 36, size: 38, offset: 60 },
  { Icon: SiExpress, radius: 140, duration: 32, size: 36, offset: 120 },
  { Icon: SiReact, radius: 95, duration: 22, size: 34, offset: 180 },
  { Icon: SiJavascript, radius: 190, duration: 42, size: 32, offset: 240 },
  { Icon: SiHtml5, radius: 210, duration: 46, size: 34, offset: 300 },
  { Icon: SiCss3, radius: 230, duration: 50, size: 34, offset: 30 },
  { Icon: SiTailwindcss, radius: 250, duration: 54, size: 36, offset: 90 },
  { Icon: SiGit, radius: 170, duration: 38, size: 32, offset: 150 },
  { Icon: SiDocker, radius: 260, duration: 56, size: 36, offset: 210 },
  { Icon: SiPostgresql, radius: 280, duration: 60, size: 34, offset: 270 },
  { Icon: SiOpenjdk, radius: 300, duration: 64, size: 34, offset: 330 },
];

export default function TechOrbitLogos() {
  return (
    <div className="relative w-[460px] h-[460px] flex items-center justify-center">
      {techs.map(({ Icon, radius, duration, size, offset }, i) => (
        <motion.div
          key={i}
          // pointer-events-none makes the large rotating boxes "click-through"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ rotate: offset }}
          animate={{ rotate: offset + 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* TRANSLATED HOLDER */}
          <motion.div
            // pointer-events-auto brings back hover capability for the icon only
            className="relative pointer-events-auto cursor-pointer"
            style={{ transform: `translateX(${radius}px)` }}
            whileHover="hover"
          >
            {/* Pulsing Glow Background */}
            <motion.div
              className="absolute inset-0 rounded-full bg-indigo-500/40 blur-xl"
              variants={{
                hover: {
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.6, 1],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  },
                },
              }}
              initial={{ opacity: 0, scale: 0.6 }}
            />

            {/* Icon with drop-shadow glow */}
            <motion.div
              className="relative text-indigo-500 dark:text-indigo-400 opacity-60"
              variants={{
                hover: {
                  scale: 1.3,
                  y: -5,
                  opacity: 1,
                  filter: "drop-shadow(0px 0px 12px rgba(99, 102, 241, 0.9))",
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Icon size={size} />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}