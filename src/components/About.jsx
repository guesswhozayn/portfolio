import { motion } from "framer-motion";
import myImage from "../assets/img/img.jpg";

const About = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
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
      },
    },
  };

  return (
    <div
      id={id}
      className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center font-sans relative"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-20 items-center lg:items-center justify-between mt-16">
        <motion.div
          className="lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-extrabold mb-6 flex items-center"
            variants={textVariants}
          >
            About Me
            <motion.div
              className="sm:hidden ml-6 flex-grow border-t border-gray-700"
              variants={lineVariants}
            ></motion.div>
          </motion.h2>
          <motion.p
            className="mb-6 text-gray-300 leading-relaxed"
            variants={textVariants}
          >
            Hello! My name is Zayn, and I enjoy creating things that live on the
            Internet. My interest in web development began in 2019 when I first
            used the browser's developer tools to remove a popup that was
            blocking the main content on a blog site - turns out playing around
            with page elements, using dev tools, to see how those change with
            changes to texts and style properties, taught me a lot about HTML &
            CSS!
          </motion.p>
          <motion.p
            className="mb-6 text-gray-300 leading-relaxed"
            variants={textVariants}
          >
            Fast-forward to today, and I've self-taught myself all the tools
            needed to make a custom production web app using different tech
            stacks. These days, my main focus is systematically building
            extensible and maintainable programs with fast and clean algorithms.
          </motion.p>
          <motion.p className="text-gray-300 mb-4" variants={textVariants}>
            Here are a few technologies I've been working with recently:
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-x-8 gap-y-2 text-gray-300"
            variants={containerVariants}
          >
            {["React", "Next.js", "Node.js", "Express.js", "Solidity"].map(
              (tag) => (
                <motion.p
                  key={tag}
                  className="flex items-center"
                  variants={textVariants}
                >
                  <span className="text-green-400 mr-2">&rsaquo;</span>
                  {tag}
                </motion.p>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full cursor-pointer overflow-hidden group flex-shrink-0 shadow-lg"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 border-4 border-transparent rounded-full transition-all duration-300 group-hover:border-green-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
