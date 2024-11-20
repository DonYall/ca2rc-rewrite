import { Project } from "./defs";

export const projects: Record<string, Project> = {
  "ca2rc-sat": {
    name: "CA2RC-SAT",
    desc: "CA2RC-SAT is a 3 unit (30cm x 10cm x 10cm) Cubesat - a small lightweight satellite, empowering students with real-world aerospace experience. Our members can enter the workforce with 1 to 4 years of practical STEM work experience, explore STEM career options, and contribute to the advancement of science in the process.",
    images: ["nanosat.png", "ca2rcsat1.jpg", "ca2rcsat2.png"],
    overview:
      "CA2RC-SAT is a student-led club to design, build, test and launch our first Cubesat project at Carleton University. Our team consists of 30 determined students from Carleton University's Engineering, Physics and Computer Science departments. We provide a 3 month training program to familiarize our members with electronics, aerospace principles, physics, material science, radiation, amateur radio training, error mitigation, testing methods and cubesat subsystems to bring all students to the same core level of proficiency. Our training is in-line with Canadian Space Agency (CSA), European Space Agency (ESA) and NASA Cubesat requirements.",
    mission:
      "Collect payload sensor data (magnetic field data, ionizing radiation, physical microdebris impacts) using small-form factor surface-mount devices to monitor space weather (intense solar activity) and space debris magnetic dipole moments.",
  },
  hab: {
    name: "High Altitude Balloon",
    desc: "The High Altitude Balloon (HAB) is a scientific platform that carries equipment to the stratosphere to perform atmospheric research. The balloon is equipped with a GPS, cameras, and a variety of sensors to measure temperature, pressure, radiation, altitude, and more. The data collected is used to futher our technology readiness level (TRL) for our CA2RC-SAT project.",
    images: ["weatherballoon.png", "hab1.png", "hab2.png", "hab3.png"],
    overview:
      "CA2RC is a student-led club to design, build, test and launch our first Cubesat project at Carleton University. Our team consists of 30 determined students from Carleton University's Engineering, Physics and Computer Science departments. We provide a 3 month training program to familiarize our members with electronics, aerospace principles, physics, material science, radiation, amateur radio training, error mitigation, testing methods and cubesat subsystems to bring all students to the same core level of proficiency. Our training is in-line with Canadian Space Agency (CSA), European Space Agency (ESA) and NASA Cubesat requirements.",
    mission:
      "Collect payload sensor data (magnetic field data, ionizing radiation, physical microdebris impacts) using small-form factor surface-mount devices to monitor space weather (intense solar activity) and space debris magnetic dipole moments.",
  },
};
