import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TierBadgeCard = ({ id }: { id: string }) => {
  return (
    <div
      className={cn(
        "my-6 flex h-18 w-full items-center justify-between gap-2 rounded-md border border-gray-400/40 px-2 text-center shadow/5",
        id === "top-impact"
          ? "flex-row-reverse bg-[#FFFFE0]"
          : "bg-[linear-gradient(90deg,#FFFFDF_0%,#FBE082)]",
      )}
    >
      <div className="w-14">
        <Image
          height={48}
          width={48}
          alt={id}
          src={`/icons/${id === "top-impact" ? "badge" : "vip-editor"}.png`}
          className="size-full object-contain"
        />
      </div>
      <p className="w-full flex-1 text-start text-xs text-balance">
        {id === "top-impact"
          ? "トップジャーナルの編集・査読経験者による科学論文 校正サービス"
          : "最高評価の校正者によるVIP校正者パックも"}
      </p>
    </div>
  );
};

function Price({ id, amount }: { id: string; amount: number }) {
  return (
    <React.Fragment>
      <TierBadgeCard id={id} />
      <div className="my-6 w-full rounded-md border border-gray-400/40 bg-white py-4 text-center shadow/5">
        <span className="text-xs">1単語</span>
        <span className="mx-2 text-2xl font-bold">{amount}</span>
        <span className="text-xs">円～</span>
      </div>
    </React.Fragment>
  );
}

export default Price;
