import { useState, useRef, useEffect } from "react";

// You can pass this as a prop, but here's a placeholder array of plain images
const slides = [
  "/steam-img-1.webp",
  "/steam-img-2.webp",
  "/steam-img-3.webp",
  "/steam-img-4.webp",
  "/steam-img-5.webp",
  "/steam-img-6.webp",
];

export default function Gallery({ visibleCount = window.innerWidth > 768 ? 5 : 3 }) {
  // visibleCount controls how many cards render on screen (e.g., set to 3 or 5)
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Single ref to handle both touch and mouse starting positions
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const total = slides.length;

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
    if (Math.abs(dx) > 40) dx < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
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
    if (Math.abs(dx) > 40) dx < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1);
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
    <div className="pt-20 bg-hijaubaru-light flex flex-col items-center justify-center relative overflow-hidden pb-60 2xl:pb-40" id="gallery-page">
      <div className="flex flex-col w-full">
        <h1 className="flex justify-center text-5xl text-center 2xl:text-6xl text-white uppercase text-shadow-[-2px_6px_0px_#0F1B24]">
          See it in action
        </h1>
        <h2 className="flex justify-center text-lg 2xl:text-2xl comic-relief-bold text-white text-shadow-[-2px_4px_0px_#0F1B24]">
          gameplay chaos
        </h2>
      </div>

      {/* Slider Track */}
      <div
        className="mt-40 2xl:mt-30 relative w-full lg:w-1/2 h-auto lg:h-60 2xl:h-100 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              className="absolute transition-all duration-550 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,opacity,left]"
              style={getDynamicStyle(i)}
              onClick={() => !isActive && goTo(i)}
            >
              {/* Plain Image Card Wrapper */}
              <div className={`relative w-80 lg:w-160 2xl:w-240 h-60 lg:h-100 2xl:h-140 overflow-hidden border-blueblack border-10 drop-shadow-[-6px_7px_6px_#0F1B24] rounded-4xl 2xl:rounded-[75px] transition-all duration-500`}>
                <img
                  src={slide}
                  alt={`Slide ${i}`}
                  draggable={false} // Crucial: Prevents browser from intercepting the drag
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 select-none`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}