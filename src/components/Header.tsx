import { useState } from "react";
import { FaInstagram, FaDiscord, FaCaretDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <section className="flex justify-center w-full fixed pt-4 pb-8 z-20">
        <div className="hidden backdrop-blur-xl bg-gray-700/20 font-bold lg:flex items-center px-8 py-4 gap-4 z-20 rounded-full">
          <Link to="/" className="h-12 mr-auto text-xl hover:text-cyan-300 flex-shrink-0">
            <img src="/logo-white.png" alt="logo" className="h-full" />
          </Link>
          <Link to="/" className="px-6 py-2 text-2xl hover:text-cyan-300">
            Home
          </Link>
          <DropdownMenu modal={false} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger className="flex gap-2 px-6 py-2 text-2xl hover:text-cyan-300 outline-none">
              Projects <FaCaretDown className={`${isDropdownOpen && "-rotate-180"} self-center transition-transform duration-200`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="backdrop-blur-xl bg-gray-500/20 border-none text-cyan-300">
              {Object.entries(projects).map(([slug, project]) => (
                <DropdownMenuItem key={slug} className="text-xl font-semibold data-[highlighted]:bg-white/15 data-[highlighted]:text-cyan-300">
                  <Link to={`/projects/${slug}`} className="px-2 py-1 w-full h-full">
                    {project.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/join" className="px-6 py-2 text-2xl hover:text-cyan-300">
            Join
          </Link>
          <Link to="/team" className="px-6 py-2 text-2xl hover:text-cyan-300">
            Team
          </Link>
          <div className="gap-6 ml-8 hidden lg:flex">
            <a href="https://www.instagram.com/ca2rc.canada/" target="_blank" rel="noreferrer" className="w-16 h-full text-xl hover:text-cyan-300">
              <FaInstagram className="text-4xl" />
            </a>
            <a href="https://discord.gg/B3etbvaM5N/" target="_blank" rel="noreferrer" className="w-16 h-full text-xl hover:text-cyan-300">
              <FaDiscord className="text-4xl" />
            </a>
          </div>
        </div>
        <button className="lg:hidden fixed top-0 right-0 p-4 text-4xl z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoMenu />
        </button>
        <nav
          className={`fixed top-0 right-0 h-screen w-screen bg-black/90 flex flex-col items-center justify-center gap-4 z-40 transition-all duration-500 font-semibold text-3xl ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          <img src="/logo-white.png" alt="logo" className="h-24 mb-12" />
          <a className="hover:text-cyan-300">Home</a>
          <a className="hover:text-cyan-300">Projects</a>
          <a className="hover:text-cyan-300">Join</a>
          <a className="hover:text-cyan-300">Team</a>
        </nav>
      </section>
    </>
  );
}

export default Header;
