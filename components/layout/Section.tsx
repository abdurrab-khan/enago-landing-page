import React from "react";

export default function Section({
  children,
}: {
  children: React.ReactElement;
}) {
  return <section className="w-full lg:max-w-355 mx-auto">{children}</section>;
}
