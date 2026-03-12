import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#161b22] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a Diploma IT student passionate about building scalable
              applications and solving algorithmic problems.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Currently focusing on full stack development using React, Node.js,
              and PostgreSQL while improving problem-solving skills through
              LeetCode and real-world projects.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 flex gap-4 items-center"
            >
              <FaCode className="text-blue-400 text-xl" />
              <p className="text-gray-300">
                Passionate about building scalable applications
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 flex gap-4 items-center"
            >
              <FaLaptopCode className="text-blue-400 text-xl" />
              <p className="text-gray-300">
                Full Stack Developer focusing on modern web technologies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#0d1117] border border-gray-800 rounded-xl p-6 flex gap-4 items-center"
            >
              <FaRocket className="text-blue-400 text-xl" />
              <p className="text-gray-300">
                Continuously learning and building impactful projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
