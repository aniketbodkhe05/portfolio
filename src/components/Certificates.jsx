import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "Java Programming",
      issuer: "XYZ Platform",
      image: "/cert1.jpg",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "ABC Institute",
      image: "/cert2.jpg",
    },
    {
      title: "Web Development",
      issuer: "Online Course",
      image: "/cert3.jpg",
    },
  ];

  return (
    <section className="py-28 bg-[#161b22] text-white">
      <h2 className="text-4xl text-center font-bold mb-16">Certificates</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
          >
            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold">{cert.title}</h3>

              <p className="text-gray-400 text-sm mt-2">
                Issued by {cert.issuer}
              </p>

              <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
                View Certificate →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
