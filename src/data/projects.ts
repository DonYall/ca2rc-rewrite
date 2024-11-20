import { Project } from "./defs";

export const projects: Record<string, Project> = {
  "ca2rc-sat": {
    name: "CA2RC-SAT",
    desc: "CA2RC-SAT is a 3 unit (30cm x 10cm x 10cm) Cubesat - a small lightweight satellite, empowering students with real-world aerospace experience. Our members can enter the workforce with 1 to 4 years of practical STEM work experience, explore STEM career options, and contribute to the advancement of science in the process.",
    images: ["nanosat.png"],
    overview:
      "CA2RC-SAT is a student-led club to design, build, test and launch our first Cubesat project at Carleton University. Our team consists of 30 determined students from Carleton University's Engineering, Physics and Computer Science departments. We provide a 3 month training program to familiarize our members with electronics, aerospace principles, physics, material science, radiation, amateur radio training, error mitigation, testing methods and cubesat subsystems to bring all students to the same core level of proficiency. Our training is in-line with Canadian Space Agency (CSA), European Space Agency (ESA) and NASA Cubesat requirements.",
    methods:
      "Software algorithms and artificial intelligence will compare data from two different magnetic imaging technologies (hall effect magnetic imager and a quad-mag magnetometer), radiation detector (gamma, beta, X-ray) and the piezoelectric impact detectors to filter valid data to relay to the ground station. Collectively, the devices will measure magnetic field distortions resulting from space debris and interactions between intense solar activity and the thermosphere. The goal to function as an early-warning space weather system to protect LEO satellites and differentiate noise artifacts from genunie space debris or space weather. Space weather, further impacted by the accelerated degradation of the magnetosphere induced by accelerating magnetic pole repositioning magnetic impacts Earth's upper and lower atmospheric conditions, ground-level environmental changes and climate.",
    mission:
      "Collect payload sensor data (magnetic field data, ionizing radiation, physical microdebris impacts) using small-form factor surface-mount devices to monitor space weather (intense solar activity) and space debris magnetic dipole moments.",
    propulsion:
      "To compliment our payload instrumenation, micro thruster will be included - a cold cathode thruster (using Teflon as fuel) to peform orbital correction, altitude correction and evasive action in the presence of on-coming space debris or re-orient the satellite during an adverse space weather event, to migitate mission failures and prolong the satellite ROI with by lifespan extension.",
    expectedOutcomes: `Evaluation of our payload sensor data in evaluating Space Debris and Space Weather

Any correlations between sensor data and Earth climate change

Student involvement in design, build, prototype succession, testing and final deployment of next-generation technology

Student continuation of research into M.Sc, PhD, M.Eng levels and formalize a long-term space propulsion group at Carleton University (not present elsewhere in Canada).
`,
    concreteOutcomes: `Technology transfer to private industry.

Graduating student entrepreneurship skills and innovation. leading to more Aerospace startup companies in Canada

Students graduate with 1 – 4 years hands-on satellite STEM experience.

Publication of research papers and technical reports relative to technology is this project to advance aerospace innovation and inspire startup companies.
`,
  },
  hab: {
    name: "High Altitude Balloon",
    desc: "The High Altitude Balloon (HAB) is a scientific platform that carries equipment to the stratosphere to perform atmospheric research. The balloon is equipped with a GPS, cameras, and a variety of sensors to measure temperature, pressure, radiation, altitude, and more. The data collected is used to futher our technology readiness level (TRL) for our CA2RC-SAT project.",
    images: ["weatherballoon.png"],
    overview:
      "CA2RC is a student-led club to design, build, test and launch our first Cubesat project at Carleton University. Our team consists of 30 determined students from Carleton University's Engineering, Physics and Computer Science departments. We provide a 3 month training program to familiarize our members with electronics, aerospace principles, physics, material science, radiation, amateur radio training, error mitigation, testing methods and cubesat subsystems to bring all students to the same core level of proficiency. Our training is in-line with Canadian Space Agency (CSA), European Space Agency (ESA) and NASA Cubesat requirements.",
    methods:
      "Software algorithms and artificial intelligence will compare data from two different magnetic imaging technologies (hall effect magnetic imager and a quad-mag magnetometer), radiation detector (gamma, beta, X-ray) and the piezoelectric impact detectors to filter valid data to relay to the ground station. Collectively, the devices will measure magnetic field distortions resulting from space debris and interactions between intense solar activity and the thermosphere. The goal to function as an early-warning space weather system to protect LEO satellites and differentiate noise artifacts from genunie space debris or space weather. Space weather, further impacted by the accelerated degradation of the magnetosphere induced by accelerating magnetic pole repositioning magnetic impacts Earth's upper and lower atmospheric conditions, ground-level environmental changes and climate.",
    mission:
      "Collect payload sensor data (magnetic field data, ionizing radiation, physical microdebris impacts) using small-form factor surface-mount devices to monitor space weather (intense solar activity) and space debris magnetic dipole moments.",
    propulsion:
      "To compliment our payload instrumenation, micro thruster will be included - a cold cathode thruster (using Teflon as fuel) to peform orbital correction, altitude correction and evasive action in the presence of on-coming space debris or re-orient the satellite during an adverse space weather event, to migitate mission failures and prolong the satellite ROI with by lifespan extension.",
    expectedOutcomes:
      "a) evaluation of our payload sensor data in evaluating Space Debris and Space Weather; b) any correlations between (a) and Earth climate change; c) student involvement in design, build, prototype succession, testing and final deployment of next-generation technology; d) student continuation of research into M.Sc, PhD, M.Eng levels and formalize a long-term space propulsion group at Carleton University (not present elsewhere in Canada).",
    concreteOutcomes:
      "a) technology transfer to private industry; b) graduating student entrepreneurship skills and innovation leading to more Aerospace startup companies in Canada; c) students graduate with 1 – 4 years hands-on satellite STEM experience; d) publication of research papers and technical reports relative to technology is this project to advance aerospace innovation and inspire startup companies.",
  },
};
