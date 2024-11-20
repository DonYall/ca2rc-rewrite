import { TeamMember } from "./defs";

export const teamMembers: Record<string, TeamMember[]> = {
  Executives: [
    { name: "Jack Rubio", role: "President", avatar: "default.jpg" },
    { name: "Daphne Papadatos", role: "Vice President", avatar: "default.jpg" },
    { name: "Pramit Shende", role: "Vice President", avatar: "default.jpg" },
    { name: "Declan McCloskey", role: "VP External", avatar: "default.jpg" },
    { name: "Summaya Salman", role: "VP Internal", avatar: "default.jpg" },
    { name: "Muhammad Hashir", role: "VP Logistics", avatar: "default.jpg" },
    { name: "Kaydin Long", role: "VP Finance", avatar: "default.jpg" },
    { name: "Danyal Haji", role: "VP Tech", avatar: "default.jpg" },
    { name: "Cameron Angle", role: "VP Tech", avatar: "default.jpg" },
    { name: "Sebastien Kayrouz", role: "VP Education", avatar: "default.jpg" },
    { name: "Ali Khan", role: "VP Media", avatar: "default.jpg" },
  ],
  "Team Leads": [
    { name: "Warda Saleh", role: "CDH Team Lead", avatar: "default.jpg" },
    { name: "Nimish Dhawan", role: "ADCS Team Lead", avatar: "default.jpg" },
    { name: "Andrew Pignatelli", role: "EPS Team Lead", avatar: "default.jpg" },
    { name: "Yousuf", role: "Mechanical Team Lead", avatar: "default.jpg" },
    { name: "Declan McCloskey", role: "Payload Team Lead", avatar: "default.jpg" },
  ],
};
