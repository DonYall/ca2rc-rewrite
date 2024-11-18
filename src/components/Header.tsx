import { useState } from "react";
import { FaInstagram, FaDiscord, FaCaretDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <section className="hidden font-bold lg:flex items-center w-full absolute px-48 pt-6 pb-12 gap-4 bg-gradient-to-b from-black to-transparent z-20">
        <a className="h-16 mr-auto text-xl hover:text-cyan-300 flex-shrink-0">
          <img src="./logo-white.png" alt="logo" className="h-full" />
        </a>
        <a className="px-6 py-2 text-3xl hover:text-cyan-300">Home</a>
        <DropdownMenu modal={false} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger className="flex px-6 py-2 text-3xl hover:text-cyan-300 outline-none">
            Projects <FaCaretDown className={`${isDropdownOpen && "-rotate-180"} self-center transition-transform duration-200`} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/50 text-cyan-300">
            <DropdownMenuItem className="px-4 text-xl font-semibold data-[highlighted]:bg-white/15 data-[highlighted]:text-cyan-300">
              CA2RC-SAT
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 text-xl font-semibold data-[highlighted]:bg-white/15 data-[highlighted]:text-cyan-300">
              High Altitude Balloon
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <a className="px-6 py-2 text-3xl hover:text-cyan-300">Join</a>
        <a className="px-6 py-2 text-3xl hover:text-cyan-300">News</a>
        <a className="px-6 py-2 text-3xl hover:text-cyan-300">Team</a>
        <div className="gap-6 ml-8 hidden xl:flex">
          <a href="https://www.linkedin.com/in/pramitshende/" target="_blank" rel="noreferrer" className="w-16 h-full text-xl hover:text-cyan-300">
            <FaInstagram className="text-4xl" />
          </a>
          <a href="mailto:pramitshende@gmail.com" target="_blank" rel="noreferrer" className="w-16 h-full text-xl hover:text-cyan-300">
            <FaDiscord className="text-4xl" />
          </a>
        </div>
      </section>
      <button className="lg:hidden fixed top-0 right-0 p-4 text-4xl z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IoMenu />
      </button>
      <nav
        className={`fixed top-0 right-0 h-screen w-screen bg-black/90 flex flex-col items-center justify-center gap-4 z-40 transition-all duration-500 font-semibold text-3xl ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <img src="./logo-white.png" alt="logo" className="h-24 mb-12" />
        <a className="hover:text-cyan-300">Home</a>
        <a className="hover:text-cyan-300">Projects</a>
        <a className="hover:text-cyan-300">Join</a>
        <a className="hover:text-cyan-300">News</a>
        <a className="hover:text-cyan-300">Team</a>
      </nav>
    </>
  );
}

export default Header;
