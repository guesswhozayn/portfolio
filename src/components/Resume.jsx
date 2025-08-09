import { motion } from "framer-motion";

const Resume = ({ id }) => {
  const programming = ["JavaScript (ES6+)", "TypeScript", "Python", "C++"];

  const frontend = [
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Zustand",
    "TanStack Query",
    "TailwindCSS",
    "Framer Motion",
    "Responsive Design",
  ];

  const backend = [
    "NodeJS",
    "ExpressJS",
    "RESTful APIs",
    "GraphQL",
    "OAuth",
    "JWT Web Tokens",
  ];

  const databases = ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"];

  const devops = ["Vercel", "Netlify", "Docekr", "Github Actions"];

  const testing = [
    "Jest",
    "React Testing Library",
    "Postman",
    "Chrome DevTools",
    "Performance Optimization",
  ];

  const tools = [
    "Git & Github",
    "Linux",
    "CLI",
    "Visual Studio Code",
    "WebStorm",
    "DataGrip",
    "MongoDB Compass",
    "MySQL Workbench",
    "NPM",
    "Webpack",
    "Vite",
    "Babel",
    "ESLint & Prettier",
    "Agile Methodologies",
  ];

  const coursework = [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Web Engineering",
    "Software Engineering",
    "Artificial Intelligence",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const AnimatedLine = () => (
    <motion.div
      className="ml-6 flex-grow h-px bg-gray-700"
      variants={lineVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    ></motion.div>
  );

  const SectionTitle = ({ children }) => (
    <motion.h2
      className="text-3xl md:text-4xl font-bold mb-6 flex items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );

  const Tag = ({ children }) => (
    <motion.span
      className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 m-1 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-200 shadow-sm"
      variants={tagVariants}
      whileHover={{
        scale: 1.1,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      {children}
    </motion.span>
  );

  const SkillSection = ({ title, tags }) => (
    <motion.div variants={sectionVariants}>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div
      id={id}
      className="min-h-screen bg-white text-black flex flex-col items-center justify-start py-40 px-12 lg:px-16 font-sans"
    >
      <div className="w-full flex flex-col gap-16 max-w-6xl mt-20">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2">
            Zain Ul Abidin
          </h1>
          <p className="text-blue-400 text-lg mb-4">
            <a href="https://github.com/ltlehro" className="hover:underline">
              github.com/ltlehro
            </a>
          </p>
          <p className="text-black text-lg leading-relaxed">
            A creative web developer with a passion for design, animation,
            interaction, problem-solving, and for mastering the latest front-end
            & back-end technologies.
          </p>
        </motion.div>

        {/* Technical Skills Section */}
        <div className="mb-12">
          <SectionTitle>
            Technical Skills
            <AnimatedLine />
          </SectionTitle>
          <div className="flex flex-col mt-12 space-y-12 text-black-300">
            <SkillSection title="Programming" tags={programming} />
            <SkillSection title="Frontend Development" tags={frontend} />
            <SkillSection title="Backend Development" tags={backend} />
            <SkillSection title="Databases" tags={databases} />
            <SkillSection title="DevOps & Deployment" tags={devops} />
            <SkillSection title="Testing and Debugging" tags={testing} />
            <SkillSection title="Tools & Workflow" tags={tools} />
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <SectionTitle>
            Education
            <AnimatedLine />
          </SectionTitle>
          <div className="flex flex-col space-y-8 text-black">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-black">
                <a
                  href="https://uoc.edu.pk/"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  The University of Chakwal
                </a>
              </h3>
              <p className="text-sm">2022 - Present</p>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-black">
                B.Sc in Computer Science
              </h3>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-black">
                Relevant Coursework
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {coursework.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
