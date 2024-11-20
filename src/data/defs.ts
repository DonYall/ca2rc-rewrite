export type Project = {
  name: string;
  desc: string;
  images: string[];
  overview: string;
  methods: string;
  mission: string;
  propulsion: string;
  expectedOutcomes: string;
  concreteOutcomes: string;
};

export type Subsystem = {
  name: string;
  desc: string;
};

export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};
