import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="max-md:hidden flex fixed left-10 bottom-0 origin-left transform flex-col items-center gap-6 cursor-pointer">
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/ltlehro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-blue-600 transition-colors h-8 w-8" />
        </a>
        <a
          href="https://instagram.com/zaynayy_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-600 transition-colors h-8 w-8" />
        </a>

        <a
          href="https://linkedin.com/in/zainulabidin74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600 transition-colors h-8 w-8" />
        </a>
      </div>
      <span className="w-[1px] h-36 bg-gray-500"></span>
    </div>
  );
};

export default Socials;
