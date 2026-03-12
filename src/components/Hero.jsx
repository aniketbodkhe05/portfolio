import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-20"
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg"
          alt="profile"
          className="w-72 rounded-2xl border border-gray-700 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content */}
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm
            <span className="text-blue-500"> Aniket Bodkhe</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-400 text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer passionate about building scalable web
            applications using React, Node.js and PostgreSQL.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/40">
              View Projects
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
