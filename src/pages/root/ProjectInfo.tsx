import { Project } from "@/data/defs";
import { projects } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import { FaSatellite } from "react-icons/fa6";
import Button from "@/components/Button";

export default function ProjectInfo({ projectSlug, i }: { projectSlug: string; i: number }) {
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

  const project: Project = projects[projectSlug];

  return (
    <div className="w-full mx-auto mt-16">
      <div className={`w-full h-full flex flex-col md:flex-row ${i % 2 == 0 && "md:flex-row-reverse"} justify-end gap-8`} ref={ref}>
        <div className="h-full w-full md:w-1/3 flex items-center self-center">
          <img
            className={`${isVisible ? "scale-100" : "scale-0"} object-cover md:w-auto md:h-full md:my-auto transition-transform duration-2000 ease-out`}
            src={`./project/${projectSlug}/${project.images[0]}`}
          />
        </div>
        <div className="h-full w-full md:w-2/3 flex flex-col justify-center gap-4 self-center">
          <h3
            className={`${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 text-lg font-semibold text-cyan-300 tracking-[0.4em] flex-shrink-0`}
          >
            PROJECT {i + 1}
          </h3>
          <h1 className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700 delay-300 text-5xl font-semibold`}>{project.name}</h1>
          <p className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700 delay-500 text-lg`}>{project.desc}</p>
          <div className={`${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700 delay-700 w-fit`}>
            <Button href={`./projects/${projectSlug}`}>
              <FaSatellite /> LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
