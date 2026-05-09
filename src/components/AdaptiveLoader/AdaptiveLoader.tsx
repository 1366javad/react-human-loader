import { Skeleton } from "../Skeleton/Skeleton";
import { useAdaptiveMessage } from "../../hooks/useAdaptiveMessage";

export const AdaptiveLoader = () => {
  const message = useAdaptiveMessage();

  return (
    <div style={{ padding: 20 }}>
      <Skeleton height={20} />
      <Skeleton height={20} />
      <Skeleton height={20} />

      <p style={{ marginTop: 10 }}>{message}</p>
    </div>
  );
};
