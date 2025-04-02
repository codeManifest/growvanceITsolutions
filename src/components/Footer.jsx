import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#16473b] text-white py-10 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between   items-start">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">Growvance</h1>
          <p className="mt-2 text-white/50 max-w-md">
            Empowering businesses with digital solutions and innovative marketing strategies.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-white/50  hover:text-gray-300 transition-all cursor-pointer mt-1">Phone: +91 98765-43210</p>
          <p className="text-white/50  hover:text-gray-300 transition-all cursor-pointer">Email: support@growvance.in</p>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Popular Services</h2>
          <a href="" className="text-white/50 hover:text-gray-300 transition-all " >PPC Marketing</a>
          <a href="" className="text-white/50 hover:text-gray-300 transition-all " >Social Media Marketing</a>
          <a href="" className="text-white/50 hover:text-gray-300 transition-all " >Android Developement</a>
          <a href="" className="text-white/50 hover:text-gray-300 transition-all " >Web Development</a>
          <a href="" className="text-white/50 hover:text-gray-300 transition-all " >Personal Relation</a>
        </div>

        <div className="mt-6 md:mt-0 flex space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={30} className="text-white hover:text-primary transition-transform transform hover:scale-110" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={30} className="text-white hover:text-primary transition-transform transform hover:scale-110" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={30} className="text-white hover:text-primary transition-transform transform hover:scale-110" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} className="text-white hover:text-primary transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-white/50">&copy; {new Date().getFullYear()} Growvance. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
