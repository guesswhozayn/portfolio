const Resume = ({ id }) => {
  const languages = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Typescript",
    "Python",
    "C++",
  ];

  const frameworks = [
    "ReactJS",
    "Redux Toolkit",
    "NextJS",
    "NodeJS",
    "ExpressJS",
    "TailwindCSS",
    "Framer Motion",
  ];

  const databases = ["MongoDB", "MySQL", "Firebase"];

  const tools = [
    "Linux",
    "VSCode",
    "WebStorm",
    "Warp",
    "Git",
    "Figma",
    "Vite",
    "ESLint & Prettier",
  ];

  const others = [
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Authentication and Authorization",
    "State Management",
    "Command Line Interface",
  ];

  const coursework = [
    "Web Engineering",
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Software Engineering",
    "Artificial Intelligence",
  ];

  return (
    <div
      id={id}
      className="min-h-screen bg-white text-black flex flex-col items-center justify-start py-40 px-12 lg:px-16 font-sans"
    >
      <div className="w-full flex flex-col gap-16 max-w-6xl mt-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2">
            Zain Ul Abidin
          </h1>
          <p className="text-blue-400 text-lg mb-4">
            <a href="https://github.com/ltlehro">github.com/ltlehro</a>
          </p>
          <p className="text-black- text-lg leading-relaxed">
            A creative web developer with a passion for design, animation,
            interaction, problem-solving, and for mastering the latest front-end
            & back-end technologies.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            Technical Skills
            <div className="ml-6 flex-grow border-t border-gray-700"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black-300">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Languages
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {languages.map((tag, index) => (
                  <li
                    className="hover:text-blue-400 cursor-pointer"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Frameworks & Libraries
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {frameworks.map((tag, index) => (
                  <li
                    className="hover:text-blue-400 cursor-pointer"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Tools & Platforms
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {tools.map((tag, index) => (
                  <li
                    className="hover:text-blue-400 cursor-pointer"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Databases
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {databases.map((tag, index) => (
                  <li
                    className="hover:text-blue-400 cursor-pointer"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-black">Others</h3>
              <ul className="list-disc list-inside space-y-2">
                {others.map((tag, index) => (
                  <li
                    className="hover:text-blue-400 cursor-pointer"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
            Education
            <div className="ml-6 flex-grow border-t border-gray-700"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            <div>
              <h3 className="text-xl font-semibold mb-1 text-black hover:text-blue-600">
                <a href="https://uoc.edu.pk/">The University of Chakwal</a>
              </h3>
              <p className="text-sm">2022 - Present</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-black">
                B.Sc in Computer Science
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-black">
                Relevant Coursework
              </h3>
              <ul className="list-disc list-inside text-md space-y-2">
                {coursework.map((tag, index) => (
                  <li
                    className="hover:text-blue-400 cursor-pointer"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
