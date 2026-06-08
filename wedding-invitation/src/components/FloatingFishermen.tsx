import { useState, useRef } from "react";
import "./FloatingFishermen.css";

interface Fish {
  id: number;
  x: number;
  y: number;
}

export function FloatingFishermen() {
  const [fishes, setFishes] = useState<Fish[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const fishCountRef = useRef(0);

  const handleFishermanClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    // Create 3-5 random fishes from the clicked fisherman
    const fishCount = Math.floor(Math.random() * 3) + 3;

    for (let i = 0; i < fishCount; i++) {
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      const newFish: Fish = {
        id: fishCountRef.current++,
        x,
        y,
      };

      setFishes((prev) => [...prev, newFish]);

      // Animate fish and remove after animation
      setTimeout(() => {
        setFishes((prev) => prev.filter((f) => f.id !== newFish.id));
      }, 1500);
    }
  };

  return (
    <div ref={containerRef} className="floating-fishermen-container">
      {/* Fisherman 1 */}
      <div
        className="floating-fisherman fisherman-1"
        onClick={handleFishermanClick}
      >
        <img src="/fisherman.svg" alt="Fisherman" />
      </div>

      {/* Fisherman 2 */}
      <div
        className="floating-fisherman fisherman-2"
        onClick={handleFishermanClick}
      >
        <img src="/fisherman.svg" alt="Fisherman" />
      </div>

      {/* Fisherman 3 */}
      <div
        className="floating-fisherman fisherman-3"
        onClick={handleFishermanClick}
      >
        <img src="/fisherman.svg" alt="Fisherman" />
      </div>

      {/* Floating Fishes */}
      {fishes.map((fish) => (
        <div
          key={fish.id}
          className="floating-fish"
          style={{
            left: `${fish.x}px`,
            top: `${fish.y}px`,
          }}
        >
          🐟
        </div>
      ))}
    </div>
  );
}
