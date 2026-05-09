import { useEffect, useState } from "react";

export const useLoadingTimer = (loading: boolean) => {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const start = Date.now();

    const interval = setInterval(() => {
      setElapsed(Date.now() - start);
    }, 200);

    return () => clearInterval(interval);
  }, [loading]);

  return elapsed;
};
