import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaPlus, FaCheck } from "react-icons/fa";
import { subsystems } from "@/data/subsystems";
import { useState } from "react";

export default function Join() {
  const [selectedSubsystem, setSelectedSubsystem] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <section>
      <Header />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col pt-32 w-full px-[10%] lg:px-[15%]">
        <main className="w-full">
          <h1 className="text-5xl font-bold text-white mb-8">Join Us</h1>
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Choose a Subsystem</h2>

              <Accordion type="single" collapsible className="w-full">
                {Object.entries(subsystems).map(([slug, subsystem]) => (
                  <AccordionItem key={slug} className="border border-gray-700 rounded-lg mb-4" value={slug}>
                    <AccordionTrigger className="font-semibold p-4 hover:no-underline">
                      {subsystem.name}
                      <div
                        className="cursor-pointer flex items-center text-sm gap-2 border py-2 px-4 rounded-xl ml-auto font-normal mr-6 hover:text-black hover:bg-white transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedSubsystem(subsystem.name);
                        }}
                      >
                        {selectedSubsystem === subsystem.name ? (
                          <>
                            <FaCheck /> <span className="hidden lg:block">Selected</span>
                          </>
                        ) : (
                          <>
                            <FaPlus /> <span className="hidden lg:block">Select</span>
                          </>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-gray-300">{subsystem.desc}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex-1">
              <div>
                <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Check Your Eligibility</h2>
                <ul className="list-disc list-inside text-white">
                  <li>Carleton University student or alumni</li>
                  <li>Attending weekly in-person/virtual meetings</li>
                  <li>Able to perform labwork</li>
                  <li>Able to perform outreach & fundraising</li>
                  <li>A positive attitude!</li>
                </ul>
                <div className="mt-4">
                  <button
                    className={`${
                      agreed ? "bg-transparent text-white" : "bg-cyan-300 text-black"
                    } flex items-center gap-2 hover:bg-transparent hover:text-white border border-cyan-300 font-semibold px-4 py-2 rounded-lg transition-colors duration-300`}
                    onClick={() => setAgreed(true)}
                    disabled={agreed}
                  >
                    <FaCheck /> {agreed ? "Confirmed" : "Confirm"}
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Join the Club</h2>
                <form className="flex flex-col gap-4" action="https://formspree.io/f/xovqlkvj" method="POST">
                  <input required type="text" name="name" placeholder="Name" className="p-2 rounded-lg bg-transparent border border-gray-700 text-white" />
                  <input required type="email" name="email" placeholder="Email" className="p-2 rounded-lg bg-transparent border border-gray-700 text-white" />
                  <input
                    name="subsystem"
                    type="text"
                    placeholder="Subsystem of Interest"
                    className="p-2 rounded-lg bg-transparent border border-gray-700 text-white"
                    value={selectedSubsystem}
                    readOnly
                  />
                  <textarea name="message" placeholder="Message (Optional)" className="p-2 rounded-lg bg-transparent border border-gray-700 text-white h-24" />
                  <button
                    type="submit"
                    className="self-start bg-cyan-300 text-black hover:bg-transparent hover:text-white border-cyan-300 border font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
}
