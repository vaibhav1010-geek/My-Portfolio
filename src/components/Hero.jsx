import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import TechOrbitLogos from "./TechOrbitLogos";
import GlowOnHover from "./GlowOnHover";

export default function Hero() {
  return (
    <section className="min-h-screen flex px-6 lg:px-32">
      {/* LEFT */}
      <div className="flex flex-col justify-center w-full lg:w-1/2">
        

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl font-semibold tracking-tightish text-gray-100"
        >
          <GlowOnHover>Vaibhav Gupta</GlowOnHover>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-4xl mt-2 text-gray-400"
        >
          <GlowOnHover>Web Developer</GlowOnHover>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-6 max-w-xl text-gray-400 leading-relaxed"
        >
          <GlowOnHover className="block">
            Full-stack developer crafting scalable and
          </GlowOnHover>
          <GlowOnHover className="block">
            high-performance web applications.
          </GlowOnHover>
        </motion.p>

        {/* in-hero nav */}
        <motion.nav
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-col gap-6"
        >
          {[
            { label: "About", href: "#about", delay: 0.4 },
            { label: "Projects", href: "#projects", delay: 0.5 },
            { label: "Contact", href: "#contact", delay: 0.6 },
          ].map(({ label, href, delay }) => (
            <motion.a
              key={label}
              href={href}
              variants={fadeUp}
              custom={delay}
              className="group flex items-center gap-4 text-sm tracking-widest uppercase text-gray-500 hover:text-indigo-400 transition-colors"
            >
              <span className="h-px w-10 bg-gray-600 group-hover:bg-indigo-400 transition-colors" />
              <GlowOnHover>{label}</GlowOnHover>
            </motion.a>
          ))}
        </motion.nav>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex items-center justify-center w-1/2">
        <TechOrbitLogos />
      </div>
    </section>
  );
}
