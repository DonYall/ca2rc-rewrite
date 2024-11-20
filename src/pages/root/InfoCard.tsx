import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function InfoCard({
  heading,
  title,
  content,
  buttonText,
  buttonHref,
}: {
  heading: React.ReactNode;
  title: string;
  content: string;
  buttonText: string;
  buttonHref: string;
}) {
  if (!buttonHref) {
    buttonHref = "#";
  }

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-br from-cyan-300/30 to-blue-300/30 p-8 rounded-2xl flex flex-col gap-4 transition-opacity duration-1000`}
    >
      <h3 className="flex gap-2 text-xl text-white font-semibold items-center mb-4">{heading}</h3>
      <h1 className="text-3xl text-white font-semibold">{title}</h1>
      <p className="text-md text-white">{content}</p>
      <Button href={buttonHref} className="mt-auto">
        <FaExternalLinkAlt /> {buttonText}
      </Button>
    </div>
  );
}
