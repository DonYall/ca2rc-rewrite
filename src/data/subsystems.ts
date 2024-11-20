import { Subsystem } from "./defs";

export const subsystems: Record<string, Subsystem> = {
  cdh: {
    name: "Command & Data Handling",
    desc: "The Command & Data Handling subsystem is responsible for the operation of the satellite. It is the brain of the satellite and is responsible for controlling the satellite and collecting data.",
  },
  adcs: {
    name: "ADCS (Attitude Control)",
    desc: "The Attitude Determination and Control System (ADCS) is responsible for controlling the orientation of the satellite. It ensures that the satellite is correctly positioned in space.",
  },
  communications: {
    name: "Communications",
    desc: "The Communications subsystem is responsible for transmitting and receiving data between the satellite and the ground station. It ensures that the satellite can communicate with Earth.",
  },
  eps: {
    name: "Electrical Power Systems",
    desc: "The Electrical Power Systems (EPS) subsystem is responsible for generating, storing, and distributing power to the satellite. It ensures that all subsystems have the power they need to operate.",
  },
  structures: {
    name: "Mechanical",
    desc: "The Mechanical subsystem is responsible for the physical structure of the satellite and its thermal management. It ensures that the satellite can withstand the harsh conditions of space.",
  },
  payload: {
    name: "Payload",
    desc: "The Payload subsystem is responsible for the instruments and experiments carried by the satellite. It ensures that the satellite can achieve its mission objectives.",
  },
};
