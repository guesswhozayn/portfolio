import { motion } from "framer-motion";

const Email = () => {
  const emailVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="max-md:hidden flex fixed right-10 bottom-0 origin-right rotate-90 transform items-center gap-4 text-white cursor-pointer"
      variants={emailVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={emailVariants}>
        <a
          href="mailto:z4yndev@gmail.com"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          z4yndev@gmail.com
        </a>
      </motion.h2>
      <motion.span
        className="w-16 h-[1px] bg-gray-500"
        variants={lineVariants}
        initial="hidden"
        animate="show"
      ></motion.span>
    </motion.div>
  );
};

export default Email;
