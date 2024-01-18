import type { TProjectItem } from "@/types/projects";

export const PROJECTS_DATA: TProjectItem[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    href: "#",
    techs: ["React", "TypeScript"],
  },
  {
    title: "Project 2",
    description: "Interdum consectetur libero id faucibus nisl tincidunt",
    href: "#",
    techs: ["Astro", "TypeScript", "TailWindCSS"],
  },
  {
    title: "Project 3",
    href: "#",
    techs: ["Next.js", "TypeScript", "TailWindCSS"],
  },
  {
    title: "Project 4",
    description:
      "Vulputate dignissim suspendisse in est ante in nibh mauris. Amet consectetur adipiscing elit pellentesque habitant morbi tristique",
    isComingSoon: true,
    techs: ["Nuxt.js", "TypeScript", "TailWindCSS"],
  },
];
