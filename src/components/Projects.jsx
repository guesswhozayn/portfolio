const Projects = ({ id }) => {
  return (
    <div id={id} className="p-10">
      <section className="py-10 flex flex-col flex-wrap items-center justify-center ">
        <h2 className="text-5xl text-center pb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-400 to-green-400 bg-[length:200%_200%] animate-gradient">
          Recent work and experiments
        </h2>

        <div className="space-y-16 max-w-4xl mx-auto">
          <div className="bg-[#63C8FF] p-10 rounded-3xl group hover:bg-[#A0DEFF] cursor-pointer transition duration-400">
            {" "}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-black text-2xl font-bold">Fit Track</h3>
              <span className="text-gray-800">2025</span>
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              A fitness tracking web app with MERN stack at its core. Offers
              workout logging, progress analytics, and social sharing.
              Integrates with wearable devices for real-time health data syncing
              and personalized recommendations.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["ReactJS", "NodeJS", "ExpressJS", "MongoDB"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#A1EEBD] hover:bg-[#CDFADB] p-10 rounded-3xl group transition duration-300 cursor-pointer">
            {" "}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl text-black font-bold">Eco Cart</h3>
              <span className="text-gray-800">2024</span>
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              An eco-friendly e-commerce platform developed using the MERN
              stack, focusing on sustainable products. Includes features like
              carbon footprint calculators for orders, reusable packaging
              options, and vendor sustainability ratings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["ReactJS", "NodeJS", "ExpressJS", "MongoDB"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#D0BFFF] hover:bg-[#DFCCFB] p-10 rounded-3xl group transition duration-300 cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl text-black font-bold">Task Master</h3>
              <span className="text-gray-800">2023</span>
            </div>
            <p className="text-gray-800 mb-4 leading-relaxed">
              A web app built with the MERN stack, featuring real-time updates,
              user authentication, and drag-and-drop functionality. Designed to
              boost productivity with customizable workflows and team
              collaboration tools.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["ReactJS", "NodeJS", "ExpressJS", "MongoDB"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
