import { useState, useRef, useEffect } from "react";
import features from "../../json/features.json";
import FrameEdge from "../../components/FrameEdge";

export default function Gallery({
  visibleCount = window.innerWidth > 768 ? 5 : 3,
}) {
  // visibleCount controls how many cards render on screen (e.g., set to 3 or 5)
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Single ref to handle both touch and mouse starting positions
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const total = features.length;

  const goTo = (newIndex) => {
    if (animating) return;
    const target = ((newIndex % total) + total) % total;
    if (target === activeIndex) return;
    setAnimating(true);
    setActiveIndex(target);
    setTimeout(() => setAnimating(false), 580);
  };

  // --- Touch Handlers ---
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(dx) > 40)
      dx < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
    dragStartX.current = null;
  };

  // --- Mouse Handlers ---
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 40)
      dx < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
    isDragging.current = false;
    dragStartX.current = null;
  };

  const handleMouseLeave = (e) => {
    // If the user drags their mouse outside the slider area, trigger the swipe
    if (isDragging.current) {
      handleMouseUp(e);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo(activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, goTo]);

  // Math magic: automatically calculates layout based on your visibleCount variable
  const getDynamicStyle = (index) => {
    // 1. Calculate shortest distance from active index (e.g., -2, -1, 0, 1, 2)
    let offset = (((index - activeIndex) % total) + total) % total;
    if (offset > total / 2) offset -= total;

    const absOffset = Math.abs(offset);
    const maxVisible = Math.floor(visibleCount / 2);

    // 2. Hide items that fall outside the desired visible count
    if (absOffset > maxVisible) {
      return {
        opacity: 0,
        transform: `translate(-50%, -50%) scale(0.4)`,
        left: "50%",
        top: "50%",
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    // 3. Dynamically spread the visible items
    // `maxSpreadPercent` controls how close the furthest cards get to the container edges
    const maxSpreadPercent = 42;
    const spread = maxVisible > 0 ? maxSpreadPercent / maxVisible : 0;

    // Calculate final layout values based on how far the card is from the center (0)
    const left = `${50 + offset * spread}%`;
    const scale = 1 - absOffset * 0.15;
    const opacity = 1;
    const zIndex = 50 - absOffset;
    const brightness = 1 - absOffset * 0.2;

    return {
      left,
      top: "50%",
      transform: `translate(-50%, -50%) scale(${scale})`,
      opacity,
      zIndex,
      filter: `brightness(${brightness})`,
      pointerEvents: "auto", // Allows clicking side cards to navigate to them
    };
  };

  return (
    <div
      className="w-full lg:h-screen flex flex-col items-center justify-center relative overflow-hidden py-20"
      id="gallery-page"
    >
      <div className="flex flex-col w-full">
        <h1 className="flex justify-center text-4xl lg:text-5xl text-center 2xl:text-6xl text-white uppercase text-shadow-[-4px_4px_0px_#0F1B24]">
          See it in action
        </h1>
        <h2 className="flex justify-center text-lg 2xl:text-2xl outfit-medium text-white text-shadow-[-2px_3px_0px_#0F1B24] mt-4">
          Charm and Courage, Hand in Paw
        </h2>
      </div>

      {/* Slider Track */}
      <div
        className="my-40 2xl:my-30 relative w-full lg:w-1/2 h-auto lg:h-60 2xl:h-100 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {features.map((feature, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              className="absolute transition-all duration-550 ease-in-out will-change-[transform,opacity,left]"
              style={getDynamicStyle(i)}
              onClick={() => !isActive && goTo(i)}
            >
              <FrameEdge
                position="topLeft"
                className={`
                w-20 md:w-30 2xl:w-40
                -top-8 md:-top-12 2xl:-top-15
                -left-7 md:-left-10 2xl:-left-14
              `}
              />
              <FrameEdge
                position="bottomRight"
                className={`
                w-20 md:w-30 2xl:w-40
                -bottom-8 md:-bottom-12 2xl:-bottom-15
                -right-7 md:-right-10 2xl:-right-14
              `}
              />

              {/* Plain Image Card Wrapper */}
              <div
                className={`relative w-70 lg:w-160 2xl:w-240 h-40 lg:h-100 2xl:h-140 overflow-hidden border-blueblack border-6 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-2xl lg:rounded-4xl transition-all duration-500`}
              >
                <img
                  src={feature.image}
                  alt={`Paw Pew Pew - Slide ${i}`}
                  draggable={false} // Crucial: Prevents browser from intercepting the drag
                  className={`w-full h-full object-cover transition-opacity duration-500 select-none`}
                />
                <div className="absolute z-5 inset-0 flex flex-col justify-end p-1 lg:p-8 bg-linear-to-t from-black/50 to-transparent">
                  <h2 className="text-xl 2xl:text-3xl uppercase tracking-wider text-shadow-[-2px_3px_0px_#0F1B24] text-white text-center lg:text-left">
                    {feature.title}
                  </h2>
                  <p className="text-sm lg:text-base 2xl:text-xl poppins-regular text-shadow-[-2px_3px_0px_#0F1B24] text-white mt-2 hidden lg:block">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <img
        src="see-it-in-action/bg-chest.webp"
        className="absolute top-0 w-full h-full object-cover object-center -z-5"
      />
    </div>
  );
}
