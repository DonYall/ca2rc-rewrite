import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full py-8 flex justify-between mt-auto">
      <div className="flex flex-wrap gap-4">
        <img src="/logo-white.png" alt="logo" className="h-12" />
        <div className="flex flex-col justify-between">
          <a href="tel:+12269359312" className="text-white hover:text-cyan-300">
            +1 (226) 935-9312
          </a>
          <a href="mailto:info@ca2rc.ca" className="text-white hover:text-cyan-300">
            info@ca2rc.ca
          </a>
        </div>
      </div>
      <div>
        <div className="flex gap-4 justify-end">
          <a href="https://www.instagram.com/ca2rc.canada/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyan-300">
            <FaInstagram /> ca2rc.canada
          </a>
          <a href="https://www.linkedin.com/company/ca2rc/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyan-300">
            <FaLinkedinIn /> CA2RC
          </a>
        </div>
        <p className="text-white">© 2024 Carleton Aerospace Astrophysics Radio Club</p>
      </div>
    </footer>
  );
}

export default Footer;
