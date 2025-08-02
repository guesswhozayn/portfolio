import { motion, useMotionValue, useTransform } from "framer-motion";

const Projects = ({ id }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id={id}
      className="flex justify-center items-center min-h-screen bg-black text-gray-200 p-10"
    >
      <section className="py-10 flex flex-col flex-wrap items-center justify-center ">
        <motion.h2
          className="text-5xl text-center pb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-400 to-green-400 bg-[length:200%_200%] animate-gradient"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Recent work and experiments
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            title="Fit Track"
            year="2025"
            description="A fitness tracking web app with MERN stack at its core. Offers workout logging, progress analytics, and social sharing. Integrates with wearable devices for real-time health data syncing and personalized recommendations."
            tags={["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
            variants={cardVariants}
            colorClass="bg-[#181920] hover:bg-[#332940]"
            tagColor="bg-sky-300"
          />
          <ProjectCard
            title="Eco Cart"
            year="2024"
            description="An eco-friendly e-commerce platform developed using the MERN stack, focusing on sustainable products. Includes features like carbon footprint calculators for orders, reusable packaging options, and vendor sustainability ratings."
            tags={["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
            variants={cardVariants}
            colorClass="bg-[#181920] hover:bg-[#332940]"
            tagColor="bg-emerald-300"
          />
          <ProjectCard
            title="Task Master"
            year="2023"
            description="A web app built with the MERN stack, featuring real-time updates, user authentication, and drag-and-drop functionality. Designed to boost productivity with customizable workflows and team collaboration tools."
            tags={["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
            variants={cardVariants}
            colorClass="bg-[#181920] hover:bg-[#332940]"
            tagColor="bg-fuchsia-300"
          />
        </motion.div>
      </section>
    </div>
  );
};

const ProjectCard = ({
  title,
  year,
  description,
  tags,
  variants,
  colorClass,
  tagColor,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`${colorClass} p-10 rounded-3xl group transition duration-300 cursor-pointer shadow-xl [transform-style:preserve-3d]`}
      variants={variants}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex justify-between items-start mb-2 [transform:translateZ(20px)]">
        <h3 className="text-gray-100 text-2xl font-bold">{title}</h3>
        <span className="text-gray-300">{year}</span>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed [transform:translateZ(20px)]">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6 [transform:translateZ(20px)]">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs ${tagColor} text-gray-800 px-3 py-1 rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
