import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delay: 1, // Add a delay to make it appear after the main content
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    show: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="max-md:hidden flex fixed left-10 bottom-0 origin-left transform flex-col items-center gap-6 cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="flex flex-col gap-4" variants={containerVariants}>
        <motion.a
          href="https://github.com/ltlehro"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaGithub className="hover:text-blue-600 transition-colors h-8 w-8" />
        </motion.a>
        <motion.a
          href="https://instagram.com/zaynayy_"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaInstagram className="hover:text-pink-600 transition-colors h-8 w-8" />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/z4yn"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          <FaLinkedin className="hover:text-blue-600 transition-colors h-8 w-8" />
        </motion.a>
      </motion.div>
      <motion.span
        className="w-[1px] h-36 bg-gray-500"
        variants={lineVariants}
      ></motion.span>
    </motion.div>
  );
};

export default Socials;
