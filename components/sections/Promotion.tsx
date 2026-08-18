import { promotion } from "@/data/promotion";
import Section from "../layout/Section";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

const BulletPoints = ({ instruction }: { instruction: string }) => {
  return (
    <li className="text-sm text-balance not-first:mt-1.5">{instruction}</li>
  );
};

const CouponButton = () => {
  return (
    <div
      className={cn(
        "relative flex w-fit cursor-pointer items-center gap-6 rounded-lg border-2 border-dashed border-gray-400/35 bg-white px-3 shadow-[0px_16px_0px_#FEC043]",
        `before:absolute before:right-1/2 before:-bottom-4.5 before:w-full before:translate-x-1/2 before:text-center before:text-xs before:font-semibold before:text-black before:content-['クーポンコードがコピーされました!']`,
      )}
    >
      <span className="text-4xl font-semibold">{promotion.couponCode}</span>
      <span className="h-16 border border-dashed border-gray-400/35" />
      <IoCopyOutline size={36} />
    </div>
  );
};

const TopLabel = () => {
  return (
    <div className="absolute -top-3 right-1/2 w-3/4 translate-x-1/2 bg-[#fdd900] px-10 py-1 text-center text-xs font-bold text-black [clip-path:polygon(0%_50%,3%_0%,97%_0%,100%_50%,97%_100%,3%_100%)] md:w-fit md:px-16">
      {promotion.label}
    </div>
  );
};

function Promotion() {
  return (
    <Section>
      <div className="relative mx-4 flex flex-col items-center gap-8 rounded-xl bg-[#FFFFDF] px-6 pt-6 pb-4 text-black md:flex-row md:px-4 xl:mx-60">
        <TopLabel />
        <div className="relative flex-1">
          <CouponButton />
          <span className="absolute top-1/2 right-0 hidden h-20 w-0.5 -translate-y-1/2 bg-[linear-gradient(180deg,#f7f1ec_0%,#989898_50%,#f7f1ec_100%)] md:inline" />
        </div>
        <ul className="flex-1 list-[square] marker:text-[#FEC043]">
          {promotion.instructions.map((ins, idx) => (
            <BulletPoints key={idx} instruction={ins} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Promotion;
