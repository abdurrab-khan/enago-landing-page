import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HiUserGroup } from "react-icons/hi2";
import { pricingPlans } from "@/data/pricingPlans";

const Badge = ({ text, style }: { text: string; style?: string }) => {
  return (
    <span
      className={cn(
        "flex items-center rounded-sm bg-[#0000FF] px-2 py-0.5 text-xs text-white",
        style,
      )}
    >
      {text}
    </span>
  );
};

const Clip = ({ reviewers }: { reviewers: string }) => {
  return (
    <span className="flex items-center gap-x-1 rounded-full border border-[#EBEB00] bg-[#FFFFDF] px-1.5 py-0.5 text-xs">
      <HiUserGroup />
      {reviewers}
    </span>
  );
};

function Header({
  badge,
  iconPath,
  reviewers,
}: (typeof pricingPlans)[0]["header"]) {
  return (
    <div className="flex items-center justify-between">
      <Image src={iconPath} alt={"icon"} height={36} width={36} />
      <div className="flex gap-2">
        {badge && <Badge text={badge} style="mr-1" />}
        <Clip reviewers={reviewers} />
      </div>
    </div>
  );
}

export default Header;
