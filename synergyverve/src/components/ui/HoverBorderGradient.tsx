"use client";

import { ReactNode } from "react";

interface HoverBorderGradientProps {
  children: ReactNode;
}

export function HoverBorderGradient({ children }: HoverBorderGradientProps) {
  return (
    <div className="relative group">
      {children}
    </div>
  );
}