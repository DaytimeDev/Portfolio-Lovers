// Statuses: Ongoing, Cancelled, Completed, Paused, Planned

const projects = [
  {
    slug: "mine-it",
    title: "Mine-It!",
    description:
      "My first professionally made game - I was the lead programmer and project development lead.",
    infoLink: "/projects/mine-it",
    gameLink: "https://www.roblox.com/games/80900303236895/MINE-IT",
    imageLink:
      "https://tr.rbxcdn.com/180DAY-8e78eedea5b8a104470be45d8ed18108/768/432/Image/Webp/noFilter",
    imageOverlayText: "",
    isLocked: false,
    details: [
      "Lead programmer and project development lead.",
      "Built for Roblox with a focus on gameplay flow and team coordination.",
      "Implemented both backend and frontend with many systems, for example plot systems " +
        "money systems, shop systems, mining systems + more",
    ],
    status: "Completed",
    role: "Development Lead & Lead Programmer",
  },
  {
    slug: "redacted1",
    title: "Nice try - Redacted Title",
    description:
      "Lead scripter for a story game using custom complex camera systems and animation systems.",
    infoLink: "/projects/redacted1",
    imageLink: "/Redacted1.png",
    imageOverlayText: "Hidden Content",
    isLocked: true,
    details: [
      "Lead scripter on a story game.",
      "Working on professional grade systems such as advanced camera systems" +
        "and animation systems. One day the camera system may become public. " +
        "Which is designed to perfect cutscenes, with custom easing graphs and more...",
    ],
    status: "Ongoing",
    role: "Lead Programmer",
  },
  {
    slug: "redacted2",
    title: "My Indie Game",
    description:
      "This is a game I am producing myself, not much detail I can give about the game though.",
    infoLink: "/projects/redacted2",
    imageLink: "/IndieGame.png",
    imageOverlayText: "Hidden Content",
    isLocked: true,
    details: [
      "Currently in production.",
      "More details are intentionally hidden for now.",
    ],
    status: "Paused",
    role: "Producer & Developer",
  },
];

export default projects;
