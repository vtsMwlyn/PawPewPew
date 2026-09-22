export default function FrameEdge({ position = "topLeft", className }) {
  const transformations = {
    topLeft: "",
    topRight: "-scale-x-100",
    bottomLeft: "rotate-180 -scale-x-100",
    bottomRight: "rotate-180",
  };

  return (
    <div className={`${className} ${transformations[position]} absolute z-5`}>
      <img
        src="/wooden-frame-edge.webp"
        className="w-full h-full relative z-5"
      />
      <img
        src="/gear.webp"
        className={`
				w-3/4 absolute animate-[spin_3s_linear_infinite]
				top-0
				-left-3 md:-left-5 xl:-left-6
			`}
      />
      <img
        src="/gear.webp"
        className={`
				w-1/3 absolute rotate-90 -scale-x-100 animate-[spin_1.5s_linear_infinite]
				top-10 md:top-14 2xl:top-18
				left-6.5 md:left-10 2xl:left-15
			`}
      />
    </div>
  );
}
