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
  return <div className=""></div>;
};

// bg-[linear-gradient(90deg,rgba(177,227,235,0)_0%,rgba(177,227,235,0.5)_49%,rgba(177,227,235,0)_100%)]

function Promotion() {
  return (
    <Section>
      <div className="relative mx-4 flex flex-col items-center gap-8 rounded-xl bg-[#FFFFDF] px-6 pt-6 pb-4 text-black md:flex-row md:px-4 xl:mx-60">
        <div className="relative flex-1">
          <CouponButton />
          <span className="absolute top-1/2 right-0 hidden h-20 w-0.5 -translate-y-1/2 bg-[linear-gradient(180deg,rgba(0,0,0,0),blue,rgba(0,0,0,0))] md:inline" />
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
