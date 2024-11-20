import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section>
      <Header />
      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col pt-32 w-full px-[10%] lg:px-[15%]">
        <main className="w-full">
          <h1 className="text-5xl font-bold text-white mb-8">Our Team</h1>
          {Object.entries(teamMembers).map(([title, members]) => (
            <div key={title} className="w-full">
              <h2 className="text-3xl font-semibold text-cyan-300 mb-4">{title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8">
                {members.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <img className="w-32 h-32 rounded-full object-cover" src={`./team/${member.avatar}`} />
                    <h3 className="mt-4 text-2xl font-semibold text-white">{member.name}</h3>
                    <p className="text-lg text-gray-300">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
        <Footer />
      </div>
    </section>
  );
}
