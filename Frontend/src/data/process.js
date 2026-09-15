/**
 * Process Data Source
 *
 * Steps for the architectural studio process:
 * 01 Consultation
 * 02 Planning
 * 03 Concept Design
 * 04 Execution
 * 05 Final Handover
 */

export const processSteps = [
  {
    id: "01",
    number: "01",
    title: "Consultation",
    description:
      "Initial discussion to understand the client's requirements and vision.",
  },
  {
    id: "02",
    number: "02",
    title: "Planning",
    description:
      "Understanding the space, requirements and project direction.",
  },
  {
    id: "03",
    number: "03",
    title: "Concept Design",
    description:
      "Developing the interior concept and design direction.",
  },
  {
    id: "04",
    number: "04",
    title: "Execution",
    description:
      "Bringing the approved design into the physical space.",
  },
  {
    id: "05",
    number: "05",
    title: "Final Handover",
    description:
      "Completing the project and delivering the finished space.",
  },
];

export const processSection = {
  eyebrow: "OUR PROCESS",
  heading: "From Vision to Reality",
  description:
    "A clear visual explanation of how an interior design project moves from the first conversation to the completed space.",
  steps: processSteps,
};

export default processSteps;
