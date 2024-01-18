import { SITE_TITLE } from "@/consts";

const getTitlePage = (title: string) => {
  if (title === SITE_TITLE) return title;
  else return `${title} / ${SITE_TITLE}`;
};

export default getTitlePage;
