// Statuses: Ongoing, Cancelled, Completed, Paused, Planned

const builds = [
  {
    slug: "car-system",
    title: "Advanced Car System",
    description: "A custom-physics car system I built from scratch.",
    videoLink:
      "https://oxyweflgsirfwsaskdow.supabase.co/storage/v1/object/public/portfolio-videos/CarSystem.mp4",
    details: [
      "Built in luau, using a custom physics system that I built myself.",
      "It has it's own suspension, handling and engine forces calculated in real time - represented by the coloured lines.",
      "It comes with easily interchangeable variables to change speed, acceleration, suspension stiffness and more.",
    ],
    status: "Completed",
    type: "Programming",
  },
  {
    slug: "ro-neat",
    title: "RoNeat",
    description:
      "Created an AI which can evolve in runtime to solve various challenges.",
    details: ["TODO"],
    status: "Ongoing",
    type: "Research + Programming",
  },
];

export default builds;
