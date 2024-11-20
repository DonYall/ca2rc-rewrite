import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects[slug!];

  if (!project) {
    return (
      <section>
        <Header />
        <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col items-center justify-center text-center pt-32 w-full px-[10%] lg:px-[15%]">
          <main className="w-full">
            <h1 className="text-5xl font-bold text-white mb-8">Project Not Found</h1>
            <p className="text-lg text-cyan-300 mb-8">The project you are looking for does not exist.</p>
          </main>
          <Footer />
        </div>
      </section>
    );
  }

  return (
    <section>
      <Header />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col pt-32 w-full px-[10%] lg:px-[15%]">
        <main className="w-full">
          <h1 className="text-5xl font-bold text-white mb-8">{project.name}</h1>
          <div className="flex w-full gap-4 items-center">
            <img src={`/project/${slug}/${project.images[0]}`} alt={project.name} className="hidden md:block w-1/12 flex-shrink mb-4 rounded-lg" />
            <p className="text-lg flex-grow text-white mb-4">{project.desc}</p>
          </div>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Overview</h2>
          <p className="text-lg text-white mb-4">{project.overview}</p>
          <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Mission</h2>
          <p className="text-lg text-white mb-8">{project.mission}</p>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {project.images.slice(1).map((image, index) => (
              <img key={index} src={`/project/${slug}/${image}`} alt={`${project.name} ${index + 1}`} className="w-full h-auto rounded-lg" />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
}
