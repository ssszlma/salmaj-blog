import type { TProjectItem } from "@/types/projects";

export const PROJECTS_DATA: TProjectItem[] = [

  {
    title: "TTT Betting",
    description: "Crypto betting ticatactoe game. Built with Gear. 2023 EasyA x Polkadot Hackathon Submission (finalist).",
    href: "https://github.com/sa1l1/TTT_Betting",
    techs: ["Gear", "Web3", "Crypto", "Blockchain"],
  },

  {
    title: "SkinCheck",
    description:
      "Skin Disease Detection app using AI Image Classification. Built with AppInventor alongside my Hackathon team from the MIT Futuremakers summer program.",
    href: "https://github.com/sa1l1/skincheck",
    techs: ["App", "AI", "Image Classification"],
  },

  {
    title: "Trivium",
    href: "https://github.com/sa1l1/mites-python-project",
    description: "Final project for the MITES Saturdays Computer Science program.",
    techs: ["Tkinter", "Python", "Game Development"],
  },

  {
    title: "GeoGrapher",
    description:
      "Geometric figure visualizer using xy coordinates. Currently in development.",
    isComingSoon: true,
    techs: ["Chart.js"],
  },

  {
    title: "To IPA: The API",
    description:
      "An API that converts English text to its International Phonetic Alphabet (IPA) equivalent. Currently in development.",
    isComingSoon: true,
    techs: ["Express.js"],
  },


];
