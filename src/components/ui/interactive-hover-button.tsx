import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  direction?: "left" | "right";
  iconOnly?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text, direction = "right", iconOnly = false, className, ...props }, ref) => {
  const isLeft = direction === "left";
  const ArrowIcon = isLeft ? ArrowLeft : ArrowRight;

  if (iconOnly || !text) {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center cursor-pointer overflow-hidden rounded-full border border-borderLine bg-surface text-ink transition-all duration-300 shadow-lg hover:border-ink hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-ink",
          className
        )}
        {...props}
      >
        {/* Resting arrow state */}
        <div className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
          <ArrowIcon size={19} className="text-ink transition-transform duration-300" />
        </div>

        {/* Hover arrow state — Slides in from opposite side with text-surface */}
        <div
          className={cn(
            "absolute z-20 flex h-full w-full items-center justify-center text-surface opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105",
            isLeft ? "translate-x-3 group-hover:translate-x-0" : "-translate-x-3 group-hover:translate-x-0"
          )}
        >
          <ArrowIcon size={19} strokeWidth={2.4} />
        </div>

        {/* Expanding circular bubble — invisible at rest, expands to fill on hover */}
        <div
          className={cn(
            "absolute h-2.5 w-2.5 rounded-full bg-ink opacity-0 scale-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:h-full group-hover:w-full group-hover:scale-[2.5]",
            isLeft
              ? "right-[26%] top-[38%] group-hover:right-0 group-hover:top-0"
              : "left-[26%] top-[38%] group-hover:left-0 group-hover:top-0"
          )}
        />
      </button>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border border-borderLine bg-surface p-2 text-center font-semibold text-ink transition-all duration-300 hover:border-ink active:scale-95",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-surface opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        {isLeft ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-0 opacity-0 rounded-lg bg-ink transition-all duration-300 group-hover:opacity-100 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]" />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
