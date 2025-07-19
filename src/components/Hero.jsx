const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="relative flex flex-col items-center gap-3 justify-center min-h-screen text-center pt-16"
    >
      {" "}
      <div className="relative inset-0 -z-10"></div>
      <h2 className="text-5xl mb-2">Hello, my name is</h2>
      <h1 className="font-mont text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-400 to-green-400 bg-[length:150%_150%] animate-gradient">
        Zayn
      </h1>
      <div className="mt-6 flex gap-4">
        <a
          href="../public/zayn_resume.pdf"
          download="zayn_resume.pdf"
          className="px-4 py-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 rounded-full"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-white hover:bg-white hover:text-black cursor-pointer transition-colors duration-300 rounded-full"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
