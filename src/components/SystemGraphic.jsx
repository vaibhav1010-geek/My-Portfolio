import { motion } from "framer-motion";

export default function SystemGraphic() {
  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 360 360"
      className="opacity-90"
    >
      {/* horizontal layers */}
      <line x1="60" y1="80" x2="300" y2="80" stroke="#6366f1" opacity="0.25" />
      <line x1="60" y1="180" x2="300" y2="180" stroke="#6366f1" opacity="0.25" />
      <line x1="60" y1="280" x2="300" y2="280" stroke="#6366f1" opacity="0.25" />

      {/* vertical connections */}
      <line x1="180" y1="80" x2="180" y2="280" stroke="#6366f1" opacity="0.15" />

      {/* animated request dots */}
      <motion.circle
        cx="60"
        cy="80"
        r="5"
        fill="#6366f1"
        animate={{ cx: [60, 300] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <motion.circle
        cx="300"
        cy="180"
        r="5"
        fill="#6366f1"
        animate={{ cx: [300, 60] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <motion.circle
        cx="180"
        cy="80"
        r="5"
        fill="#818cf8"
        animate={{ cy: [80, 280] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
