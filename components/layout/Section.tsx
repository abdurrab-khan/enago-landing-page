import { cn } from "@/lib/utils";
import React from "react";

export default function Section({
  children,
  style,
}: {
  children: React.ReactElement;
  style?: string;
}) {
  return (
    <section className={cn("mx-auto mt-12 w-full lg:max-w-355", style)}>
      {children}
    </section>
  );
}
