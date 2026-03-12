import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiPostgresql, SiSpringboot, SiFlutter } from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Flutter", icon: <SiFlutter /> },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {tech.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-[#161b22] border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-blue-500 transition"
          >
            <div className="text-3xl text-blue-400">{t.icon}</div>

            <p className="text-gray-300">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
