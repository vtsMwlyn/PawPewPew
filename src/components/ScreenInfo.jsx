import { useEffect, useState } from "react";

export default function ScreenInfo() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const device =
    width < 764 ? "Mobile" :
    width < 1536 ? "Tablet" :
    "Desktop";

  return (
    <div className="px-4 py-2 bg-black text-white">
      {width}px - <span className="text-amber-400">{device}</span>
    </div>
  );
}