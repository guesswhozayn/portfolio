const Contact = ({ id }) => {
  return (
    <div
      id={id}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-inter relative overflow-hidden"
    >
      <div className="text-center p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 text-transparent bg-clip-text">
            and I'd love to <br /> work with you
          </span>
        </h1>
        <button className="cursor-pointer px-8 py-3 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300">
          <a href="mailto:zainulabidin74@outlook.com">Contact Me</a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
