import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#0d1117]/80 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-xl font-bold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Aniket Bodkhe
        </motion.h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
