import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0d1117] text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-gray-400 mb-10">
          I'm always open to discussing new projects, collaboration
          opportunities, or tech conversations.
        </p>

        {/* Email Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:aniketbodkhe722@gmail.com"
          className="inline-flex items-center gap-3 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          <FaEnvelope />
          Email Me
        </motion.a>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-10 text-2xl">
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
    </section>
  );
}
