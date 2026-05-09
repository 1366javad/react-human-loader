import { useEffect, useState } from "react";
import { classifyLoadingTime } from "../utiles/timeClassifier";
import { getRandomMessage } from "../utiles/randomMessage";

export const useAdaptiveMessage = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;

      const type = classifyLoadingTime(elapsed);

      setMessage(getRandomMessage(type));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return message;
};
