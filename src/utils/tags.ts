export const getTags = (arr: string[][]): string[] => {
  const returnData: string[] = [];

  arr.map((el) =>
    el.map((item) => {
      return returnData.push(item);
    }),
  );

  return [...new Set(returnData)];
};
