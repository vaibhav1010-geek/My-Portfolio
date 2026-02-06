import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/motion.js";

const projects = [
  {
    title: "Insura AI",
    desc: "Built a scalable full-stack insurance policy management platform that automates policy tracking and renewals using OCR + GPT-based document extraction, secure authentication using JWT, OTP verification and OAuth 2.0, REST APIs, cloud storage, and an automated renewal reminder system.",
    link: "https://insura-ai-pi.vercel.app/",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OCR",
      "GPT",
      "Cloudinary",
    ],
  },
  {
    title: "Subscribe.",
    desc: "Built a subscription billing backend system suitable for a SaaS platform, implementing secure authentication, idempotent subscription workflows, invoice life cycle management, and payment integrations via Razorpay for a production-oriented design.",
    link: "https://github.com/vaibhav1010-geek/Subscribe.",
    tech: ["Node.js", "Express", "MongoDB", "Razorpay", "JWT"],
  },
  {
    title: "CareerConnect",
    desc: "Built a full-stack job portal with secure JWT authentication and role-based dashboards for recruiters and candidates. Implemented optimized backend APIs with Express & MongoDB, responsive UI using Tailwind CSS, and automated email notifications with Nodemailer.",
    link: "https://github.com/vaibhav1010-geek/CareerConnect",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Nodemailer"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-32 py-24">
      {/* Heading */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-semibold tracking-tightish mb-10 text-gray-100"
      >
        Projects
      </motion.h3>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className="relative group"
            whileHover="hover"
          >
            {/* SUBTLE BREATHING GLOW */}
            <motion.div
              className="absolute -inset-[1px] rounded-lg bg-indigo-500/30 blur-xl pointer-events-none"
              initial={{ opacity: 0 }}
              variants={{
                hover: {
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.98, 1.02, 0.98],
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
            />

            {/* CARD */}
            <div className="relative rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 transition-all duration-500 group-hover:border-indigo-500/30">
              <h4 className="text-xl font-semibold text-gray-100 group-hover:text-indigo-300 transition-colors duration-300">
                {p.title}
              </h4>

              <p className="mt-2 text-gray-400 leading-relaxed">
                {p.desc}
              </p>

              {/* TECH STACK PILLS */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-indigo-400/80 hover:text-indigo-300 transition-colors font-medium"
              >
                {p.title === "Insura AI" ? "Demo →" : "GitHub →"}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
