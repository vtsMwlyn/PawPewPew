import { useState, useRef } from "react";

// You can pass this as a prop, but here's a placeholder array of plain images
const slides = [
  "/steam-img-1.webp",
	"/steam-img-2.webp",
	"/steam-img-3.webp",
	"/steam-img-4.webp",
	"/steam-img-5.webp",
	"/steam-img-6.webp",
];

export default function FlexibleSlider({ visibleCount = 5 }) {
  // visibleCount controls how many cards render on screen (e.g., set to 3 or 5)
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);
  const total = slides.length;

  const goTo = (newIndex) => {
    if (animating) return;
    const target = ((newIndex % total) + total) % total;
    if (target === activeIndex) return;
    setAnimating(true);
    setActiveIndex(target);
    setTimeout(() => setAnimating(false), 580);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
    touchStartX.current = null;
  };

  // Math magic: automatically calculates layout based on your visibleCount variable
  const getDynamicStyle = (index) => {
    // 1. Calculate shortest distance from active index (e.g., -2, -1, 0, 1, 2)
    let offset = ((index - activeIndex) % total + total) % total;
    if (offset > total / 2) offset -= total;
    
    const absOffset = Math.abs(offset);
    const maxVisible = Math.floor(visibleCount / 2);

    // 2. Hide items that fall outside the desired visible count
    if (absOffset > maxVisible) {
      return {
        opacity: 0,
        transform: `translate(-50%, -50%) scale(0.4)`,
        left: '50%',
        top: '50%',
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    // 3. Dynamically spread the visible items
    // `maxSpreadPercent` controls how close the furthest cards get to the container edges
    const maxSpreadPercent = 42; 
    const spread = maxVisible > 0 ? maxSpreadPercent / maxVisible : 0;
    
    // Calculate final layout values based on how far the card is from the center (0)
    const left = `${50 + (offset * spread)}%`;
    const scale = 1 - (absOffset * 0.15);
    const opacity = 1;
    const zIndex = 50 - absOffset;
    const brightness = 1 - (absOffset * 0.2);

    return {
      left,
      top: '50%',
      transform: `translate(-50%, -50%) scale(${scale})`,
      opacity,
      zIndex,
      filter: `brightness(${brightness})`,
      pointerEvents: "auto", // Allows clicking side cards to navigate to them
    };
  };

  return (
		<div className="min-h-screen bg-hijaubaru-light flex flex-col items-center justify-center relative overflow-hidden pb-40">
			<div className="flex flex-col w-full">
          <h1 className="flex justify-center text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">See it in action</h1>
          <h2 className="flex justify-center text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">gameplay chaos</h2>
        </div>

      <div className="mt-40 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16)_0%,transparent_60%)] pointer-events-none" />

      {/* Slider Track */}
      <div
        className="relative w-full 2xl:w-1/2 h-[400px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              className="absolute transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,opacity,left]"
              style={getDynamicStyle(i)}
              onClick={() => !isActive && goTo(i)}
            >
              {/* Plain Image Card Wrapper */}
              <div className={`relative w-200 h-120 overflow-hidden border-blueblack border-10 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-[75px] transition-all duration-500 cursor-pointer`}>
                <img
                  src={slide}
                  alt={`Slide ${i}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}