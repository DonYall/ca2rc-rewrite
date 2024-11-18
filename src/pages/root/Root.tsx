import Header from "@/components/Header";
// import motion from "motion/react";

export default function Root() {
  return (
    <section>
      <Header />
      <div className="w-full h-svh grid grid-cols-1 md:grid-cols-2 relative">
        <div className="absolute h-screen flex items-center">
          <img
            className="relative object-cover w-auto h-full lg:w-1/2 lg:h-auto my-auto brightness-[0.25] md:brightness-75 translate-x-0 md:-translate-x-1/3 lg:translate-x-0 animate-appear-right"
            src="./earth.png"
          />
          <img className="hidden lg:block absolute w-1/2 top-1/4 -left-[10%] transform animate-appear-up" src="./nanosat.png" />
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
        <div className="w-0 h-0"></div>
        <div className="h-svh flex justify-center items-center z-10 gap-4 animate-appear-down">
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
      <div className="h-svh"></div>
    </section>
  );
}
