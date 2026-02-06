export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center gap-6 text-gray-300">
        <a
          href="#about"
          className="hover:text-indigo-400 transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-indigo-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-indigo-400 transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
