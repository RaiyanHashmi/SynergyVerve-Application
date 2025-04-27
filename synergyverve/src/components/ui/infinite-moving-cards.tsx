"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  imageOnly = false,
}: {
  items: (
    | {
        quote: string;
        name: string;
        title: string;
      }
    | {
        image: string;
        alt?: string;
      }
  )[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  imageOnly?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  };

  const getSpeed = () => {
    const durations: Record<string, string> = {
      fast: "20s",
      normal: "40s",
      slow: "80s",
    };
    containerRef.current?.style.setProperty(
      "--animation-duration",
      durations[speed] || "40s",
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-20 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              "relative shrink-0",
              imageOnly
                ? "w-[150px] h-[80px] flex items-center justify-center"
                : "w-[350px] md:w-[450px] max-w-full rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            )}
          >
            {imageOnly && "image" in item ? (
              <img
                src={item.image}
                alt={item.alt || "Logo"}
                className="max-h-[60px] max-w-full  object-contain"
              />
            ) : "quote" in item ? (
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
