import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import GlowOnHover from "./GlowOnHover";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-24 flex flex-col items-center justify-center text-center"
    >
      {/* Heading */}
      <h3 className="text-gray-400 text-2xl font-semibold tracking-tightish mb-8">
        <GlowOnHover>Let&apos;s connect :</GlowOnHover>
      </h3>

      {/* Social Icons */}
      <div className="flex items-center gap-8 text-gray-400">
        
        <a
          href="https://github.com/vaibhav1010-geek"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-indigo-400 transition-transform hover:-translate-y-1"
        >
          <GlowOnHover>
            <FaGithub size={26} />
          </GlowOnHover>
        </a>

        <a
          href="https://www.linkedin.com/in/vaibhav-gupta-2555a5240/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-indigo-400 transition-transform hover:-translate-y-1"
        >
          <GlowOnHover>
            <FaLinkedinIn size={26} />
          </GlowOnHover>
        </a>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=guptavaibhav2005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="hover:text-indigo-400 transition-transform hover:-translate-y-1"
>
  <GlowOnHover>
    <FaEnvelope size={26} />
  </GlowOnHover>
</a>


      </div>
    </footer>
  );
}
