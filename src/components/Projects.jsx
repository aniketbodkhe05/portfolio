import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Exam Room Seat Allotment",
      desc: "AI based exam hall seat allocation system",
      tech: ["Spring Boot", "MySQL"],
    },
    {
      title: "Gray Biller",
      desc: "Restaurant billing system built in Java Swing",
      tech: ["Java", "Swing"],
    },
    {
      title: "Cybersecurity App",
      desc: "Security toolkit mobile application",
      tech: ["Flutter", "Security APIs"],
    },
  ];

  return (
    <section id="projects" className="py-28">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#161b22] border border-gray-800 p-6 rounded-xl shadow-lg hover:border-blue-500"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">{p.title}</h3>

            {/* Description */}
            <p className="text-gray-400 mt-3">{p.desc}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-[#0d1117] border border-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                <FaGithub />
                Code
              </button>

              <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                <FaExternalLinkAlt />
                Live
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
