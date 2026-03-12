import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Achievements() {
  const data = [
    {
      icon: <FaCode />,
      number: "200+",
      label: "LeetCode Problems Solved",
    },
    {
      icon: <FaBriefcase />,
      number: "1",
      label: "Developer Internship",
    },
    {
      icon: <FaGraduationCap />,
      number: "95%",
      label: "Diploma IT Score",
    },
  ];

  return (
    <section className="py-28 bg-[#0d1117] text-white">
      <h2 className="text-4xl text-center font-bold mb-16">Achievements</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07 }}
            className="bg-[#161b22] border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500 transition"
          >
            {/* Icon */}
            <div className="text-blue-400 text-3xl mb-4 flex justify-center">
              {item.icon}
            </div>

            {/* Number */}
            <h3 className="text-4xl font-bold">{item.number}</h3>

            {/* Label */}
            <p className="text-gray-400 mt-3">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
