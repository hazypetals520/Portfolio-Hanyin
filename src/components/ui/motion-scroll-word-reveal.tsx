"use client"

import { Fragment, useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react"
import "./motion-scroll-word-reveal-utils/index.css"

const DEFAULT_TEXT =
  "No one bad is ever truly bad, And no one good is ever truly good."
const REST_OPACITY = 0.15
const REVEAL_SPAN = 0.8
const WORD_WINDOW = 0.2

function getWordRange(index: number, count: number) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * REVEAL_SPAN
  return { start, end: Math.min(1, start + WORD_WINDOW) }
}

export function getWordOpacity(
  progress: number,
  { start, end }: { start: number; end: number },
  rest = REST_OPACITY,
) {
  if (progress <= start) return rest
  if (progress >= end) return 1
  const t = (progress - start) / (end - start)
  return rest + (1 - rest) * t
}

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
}: {
  children: string
  progress: MotionValue<number>
  index: number
  count: number
  reducedMotion: boolean
}) {
  const range = getWordRange(index, count)
  const opacity = useTransform(progress, (value) => getWordOpacity(value, range))

  return (
    <motion.span aria-hidden="true" style={reducedMotion ? undefined : { opacity }}>
      {children}
    </motion.span>
  )
}

export interface ScrollWordRevealProps {
  text?: string;
  kicker?: string;
  className?: string;
}

export function ScrollWordReveal({
  text = DEFAULT_TEXT,
  kicker = "Scroll to reveal · Design Manifesto",
  className = ""
}: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  
  // Track scroll through the viewport smoothly
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 35%"],
  })
  
  const words = text.split(" ")

  return (
    <div ref={containerRef} className={`scroll-word-reveal-frame ${className}`}>
      <section
        ref={targetRef}
        className="scroll-word-reveal"
        aria-labelledby="scroll-word-reveal-heading"
      >
        <div className="scroll-word-reveal__stage">
          <div className="scroll-word-reveal__layout">
            <div className="scroll-word-reveal__progress" aria-hidden="true">
              <motion.span style={{ scaleY: reducedMotion ? 1 : scrollYProgress }} />
            </div>
            <div className="scroll-word-reveal__content">
              <p className="scroll-word-reveal__kicker">{kicker}</p>
              <h2
                id="scroll-word-reveal-heading"
                className="scroll-word-reveal__heading"
                aria-label={text}
              >
                {words.map((word, index) => (
                  <Fragment key={`${word}-${index}`}>
                    <Word
                      progress={scrollYProgress}
                      index={index}
                      count={words.length}
                      reducedMotion={!!reducedMotion}
                    >
                      {word}
                    </Word>
                    {index < words.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScrollWordReveal
