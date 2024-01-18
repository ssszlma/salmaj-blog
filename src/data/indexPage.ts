import type { TIndexPageData } from "@/types/indexPageData";

const today = new Date();

const description =
  "Lorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, **quis nostrud exercitation** ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const footer = `© ${today.getFullYear()} / smcnikita`;

export const INDEX_PAGE_DATA: TIndexPageData = {
  title: "Hi, I’m smcnikita 👋",
  description,
  email: "example@example.com",
  footer,
};
