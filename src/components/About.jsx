import myImage from "../assets/img/img.jpg";

const About = ({ id }) => {
  return (
    <div
      id={id}
      className="min-h-screen bg-black text-white p-18 flex flex-col items-center justify-center font-sans relative"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-20 items-center lg:items-center justify-between mt-16">
        <div>
          <h2 className="text-3xl font-extrabold mb-6 flex items-center">
            About Me
            <div className="sm:hidden ml-6 flex-grow border-t border-gray-700"></div>
          </h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Hello! My name is Zayn, and I enjoy creating things that live on the
            Internet. My interest in web development began in 2019 when I first
            used the browser's developer tools to remove a popup that was
            blocking the main content on a blog site - turns out playing around
            with page elements, using dev tools, to see how those change with
            changes to texts and style properties, taught me a lot about HTML &
            CSS!
          </p>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Fast-forward to today, and I've self-taught myself all the tools
            needed to make a custom production web app using different tech
            stacks. These days, my main focus is systematically building
            extensible and maintainable programs with fast and clean algorithms.
          </p>
          <p className="text-gray-300 mb-4">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-x-8 gap-y-2 text-gray-300">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "ReactJS",
              "ExpressJS",
              "MongoDB",
            ].map((tag) => (
              <p key={tag} className="flex items-center">
                <span className="text-green-400 mr-2">&rsaquo;</span>
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full cursor-pointer border-2 border-gray-400 overflow-hidden group flex-shrink-0">
          {" "}
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-green-400" />
        </div>
      </div>
    </div>
  );
};

export default About;
