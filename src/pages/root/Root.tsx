import Header from "@/components/Header";
import ProjectInfo from "./ProjectInfo";
import { projects } from "@/data/projects";
import InfoCard from "./InfoCard";
import { IoPersonAdd } from "react-icons/io5";
import { FaUsers, FaHeart, FaFolder } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Root() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-black">
      <Header />
      <div className="p-3 lg:p-8 h-svh">
        <div className="root-page w-full h-full grid grid-cols-1 md:grid-cols-2 relative rounded-3xl overflow-hidden">
          <div className="absolute h-screen flex items-center">
            <img
              className="relative object-cover w-auto h-full lg:w-1/2 lg:h-auto my-auto brightness-[0.25] md:brightness-75 translate-x-0 md:-translate-x-1/3 lg:translate-x-0 animate-appear-right ease-out"
              src="./earth.png"
            />
            <img className="hidden lg:block absolute w-1/2 top-1/4 -left-[10%] transform animate-appear-up ease-out" src="./nanosat.png" />
            {/* <div className="absolute w-1/2 py-4 bg-cyan-600/50 rounded-l rounded-full mt-96 hidden lg:flex justify-around">
              <a href="/" target="_blank" rel="noreferrer">
                <img className="h-16" src="./logo-white.png" alt="" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img className="h-16" src="./logo-white.png" alt="" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img className="h-16" src="./logo-white.png" alt="" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <img className="h-16" src="./logo-white.png" alt="" />
              </a>
            </div> */}
          </div>
          <div className="w-0 h-0" />
          <div className="h-svh flex justify-center items-center z-10 gap-4 animate-appear-down ease-out">
            <div className="flex flex-col gap-6">
              <p className="text-3xl text-cyan-300 font-bold w-full text-center md:text-right tracking-[0.4rem] leading-none">
                Carleton
                <br />
                Aerospace
                <br />
                Astrophysics
                <br />
                Radio
                <br />
                Club
              </p>
              <h1 className="text-7xl text-white font-bold text-right tracking-widest">CA2RC</h1>
              <span className="bg-cyan-300 h-0.5 w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[10%] lg:px-[15%]">
        <div className="pb-48">
          {Object.entries(projects).map(([slug, _], i) => (
            <ProjectInfo key={slug} projectSlug={slug} i={i} />
          ))}
        </div>
        <div className="w-full md:w-2/3 flex mx-auto items-center pb-8">
          <span className="bg-white h-0.5 flex-grow" />
          <h3 className="text-2xl text-cyan-300 font-semibold tracking-[0.3em] mx-8">MORE INFO</h3>
          <span className="bg-white h-0.5 flex-grow" />
        </div>
        <div className="w-full min-h-svh grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-8">
          <InfoCard
            heading={
              <>
                <IoPersonAdd /> JOIN US
              </>
            }
            title="EVERYONE WELCOME"
            content="Join us to learn more about aerospace, astrophysics, radio and more. We provide training, workshops, and hands-on experience to all members."
            buttonText="JOIN NOW"
            buttonHref="/join"
          />
          <InfoCard
            heading={
              <>
                <FaUsers /> TEAM
              </>
            }
            title="OUR MEMBERS"
            content="Meet the dedicated members who make our projects possible. Learn about their roles and contributions to the club."
            buttonText="MEET THE TEAM"
            buttonHref="/team"
          />
          <InfoCard
            heading={
              <>
                <FaFolder /> PROJECTS
              </>
            }
            title="OUR PROJECTS"
            content="Discover the various projects our club is working on, from satellite development to radio astronomy."
            buttonText="SEE PROJECTS"
            buttonHref="/projects"
          />
          <InfoCard
            heading={
              <>
                <FaHeart /> DONATE
              </>
            }
            title="SUPPORT US"
            content="Your donations help us fund our projects, events, and outreach programs. Every contribution makes a difference."
            buttonText="DONATE NOW"
            buttonHref="https://www.gofundme.com/f/Support-Student-Satellites"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
