import { promotion } from "@/data/promotion";
import Section from "../layout/Section";
import { IoCopyOutline } from "react-icons/io5";

const BulletPoints = ({ instruction }: { instruction: string }) => {
  return (
    <li className="text-sm text-balance not-first:mt-1.5">{instruction}</li>
  );
};

function Promotion() {
  return (
    <Section>
      <div className="mx-60 mt-12 flex items-center gap-8 rounded-xl bg-[#FFFFDF] px-4 pt-6 pb-2 text-black">
        <div className="relative flex-1">
          <div className="relative flex w-fit items-center gap-6 rounded-md border-2 border-dashed border-gray-400/35 bg-white px-3">
            <span className="text-4xl font-semibold">
              {promotion.couponCode}
            </span>
            <span className="h-16 border border-dashed border-gray-400/35" />
            <IoCopyOutline size={36} />
          </div>
          <span className="absolute top-1/2 right-0 h-20 w-0.5 -translate-y-1/2 bg-red-500" />
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
