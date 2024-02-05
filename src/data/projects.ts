import type { TProjectItem } from "@/types/projects";

export const PROJECTS_DATA: TProjectItem[] = [

  {
    title: "TTT Betting",
    description: "Crypto betting ticatactoe game. 2023 EasyA x Polkadot Hackathon Submission (finalist). Built with Gear alongside my teammates.",
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
    title: "More",
    href: "https://github.com/sa1l1?tab=repositories",
    description: "More (old) projects available on my github!",
    techs: [" "],
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
