import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion.js";
import GlowOnHover from "./GlowOnHover";

export default function About() {
  return (
    <section id="about" className="px-6 lg:px-32 py-24">
      {/* Heading */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-semibold tracking-tightish mb-6"
      >
        <GlowOnHover>About Me</GlowOnHover>
      </motion.h3>

      {/* Body */}
      <motion.p
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl text-gray-400 leading-relaxed"
      >
        <GlowOnHover className="block">
          I’m a second-year engineering student with experience in full-stack web
          development, building scalable APIs and delivering seamless,
          user-centric web experiences.
        </GlowOnHover>

        <GlowOnHover className="block mt-4">
          While I’m comfortable working across the entire stack, my core interest
          lies in backend development, where I focus on system design, API
          architecture, performance optimization, and writing clean,
          maintainable code.
        </GlowOnHover>

        <GlowOnHover className="block mt-4">
          I enjoy understanding applications end to end and building reliable,
          scalable solutions that translate real-world requirements into
          well-engineered systems.
        </GlowOnHover>
      </motion.p>
    </section>
  );
}
