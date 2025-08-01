import { motion } from "framer-motion";

const Hero = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id={id}
      className="relative flex flex-col items-center gap-3 justify-center min-h-screen text-center pt-16"
    >
      <div className="relative inset-0 -z-10"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.h2
          className="text-5xl max-md:text-3xl mb-2"
          variants={itemVariants}
        >
          Hello, my name is
        </motion.h2>
        <motion.h1
          className="text-9xl max-md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-400 to-green-400 bg-[length:150%_150%] animate-gradient"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Zayn
        </motion.h1>
      </motion.div>
      <motion.div
        className="mt-6 flex gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.a
          href="../zayn_resume.pdf"
          download="zayn_resume.pdf"
          className="px-4 py-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 rounded-full"
          variants={itemVariants}
        >
          Download Resume
        </motion.a>
        <motion.a
          href="#contact"
          className="px-4 py-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 rounded-full"
          variants={itemVariants}
        >
          Get in touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
