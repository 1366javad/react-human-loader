export const classifyLoadingTime = (time: number) => {
  if (time < 1000) return "fast";
  if (time < 3000) return "normal";
  if (time < 7000) return "slow";

  return "verySlow";
};
