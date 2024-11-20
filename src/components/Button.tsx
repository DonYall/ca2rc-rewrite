import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  return (
    <Link
      to={href}
      className={twMerge(
        "flex gap-2 items-center text-xl bg-cyan-300 text-black/75 border border-cyan-300 hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 font-bold py-3 px-6 rounded-full self-start",
        className,
      )}
    >
      {children}
    </Link>
  );
}
