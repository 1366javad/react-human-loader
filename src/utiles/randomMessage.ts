export const messages = {
  fast: ["Loading", "Just a moment"],

  normal: ["Preparing your data", "Almost ready"],

  slow: ["Still working", "Good things take time"],

  verySlow: ["Taking longer than usual", "Thanks for your patience"],
};
type LoadingType = "fast" | "normal" | "slow" | "verySlow";
export const getRandomMessage = (type: LoadingType) => {
  const list = messages[type];

  return list[Math.floor(Math.random() * list.length)];
};
