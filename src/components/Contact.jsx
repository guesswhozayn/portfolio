import { motion } from "framer-motion";

const Contact = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      id={id}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-inter relative overflow-hidden"
    >
      <div className="text-center p-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 text-transparent bg-clip-text animate-gradient bg-[length:150%_150%]">
            and I'd love to <br /> work with you
          </span>
        </motion.h1>
        <motion.button
          className="cursor-pointer px-8 py-3 border border-white rounded-full text-lg transition-colors duration-300"
          variants={buttonVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{
            backgroundColor: "#fff",
            color: "#000",
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="mailto:zainulabidin74@outlook.com">Contact Me</a>
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;
