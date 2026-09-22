import { useEffect, useMemo } from "react";

export default function Separator() {
  const repetition = useMemo(() => {
    return Math.ceil(window.innerWidth / 500);
  }, [window.innerWidth]);

  return (
    <div className="w-full flex no-wrap overflow-hidden">
      {Array(repetition)
        .fill(0)
        .map((_, index) => (
          <img
            src="/separator.webp"
            className="w-[500px]"
            alt="foto separator"
          />
        ))}
    </div>
  );
}
