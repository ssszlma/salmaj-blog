export const transformText = (text: string) => {
  return text.replace(
    /\*\*{1,2}(.*?)\*\*{1,2}/g,
    `<b class="font-bold text-purple-400">$1</b>`,
  );
};
