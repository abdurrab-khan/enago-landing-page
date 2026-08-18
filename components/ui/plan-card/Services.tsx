import React from "react";
import { pricingPlans } from "@/data/pricingPlans";
import Heading from "./Heading";
import { cn } from "@/lib/utils";

type TList = (typeof pricingPlans)[0]["services"][0] & {
  isHeading?: boolean;
  highlight?: string;
};

const Highlight = ({ text, style }: { text: string; style: string }) => {
  return (
    <span className={cn("px-1 py-0.5 text-xs text-nowrap text-white", style)}>
      {text}
    </span>
  );
};

const List = ({
  name,
  cost,
  validity,
  highlight,
  isHeading = false,
}: TList) => {
  return (
    <li className="flex items-center justify-between border-gray-400/40 pb-1 text-sm not-last:mb-4 not-last:border-b">
      <span
        className={cn(
          "flex flex-1 flex-wrap gap-1",
          isHeading && "font-semibold",
        )}
      >
        {highlight && (
          <Highlight text={highlight} style="bg-[#ffd900] text-black" />
        )}
        {name}
        {cost && <Highlight text={cost} style="bg-[#d72b27] ml-1" />}
      </span>
      <span className={cn("", isHeading && "font-semibold")}>{validity}</span>
    </li>
  );
};

function Services({
  services,
}: {
  services: (typeof pricingPlans)[0]["services"];
}) {
  return (
    <React.Fragment>
      <Heading text="ご修正後のアフターサービス" />
      <ul className="mt-4">
        <List name="サービス" validity="有効期間" cost="" isHeading />
        {services.map((s) => (
          <List key={s.name} {...s} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Services;
