'use client';
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  // Smooth springs for outer ring trail
  const cursorX = useSpring(0, { stiffness: 450, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 28, mass: 0.5 });

  // Direct position for the inner dot (no lag)
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is touch-enabled
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, .lanyard-canvas, .gf-sheet, .gf-hit, .gf-key'
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer trailing minimalist ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#111111' : 'rgba(17, 17, 17, 0.3)',
          backgroundColor: isHovered ? 'rgba(183, 200, 176, 0.2)' : 'transparent',
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-8 h-8 rounded-full border border-ink/40 fixed pointer-events-none"
      />

      {/* Center sharp micro dot */}
      <div
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%) scale(${
            isClicked ? 0.7 : isHovered ? 1.3 : 1
          })`,
          transition: 'transform 0.1s ease-out, background-color 0.2s ease',
        }}
        className={`w-2 h-2 rounded-full fixed pointer-events-none ${
          isHovered ? 'bg-sage-dark' : 'bg-ink'
        }`}
      />
    </div>
  );
}
