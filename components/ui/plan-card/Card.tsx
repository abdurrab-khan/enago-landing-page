import Header from "./Header";
import { pricingPlans } from "@/data/pricingPlans";
import Heading from "./Heading";
import Price from "./Price";
import Link from "next/link";
import Services from "./Services";

function PlanCard({
  id,
  title,
  header,
  description,
  price,
  moreDetails,
  benefits,
  services,
}: (typeof pricingPlans)[0]) {
  return (
    <div className="size-full border-0 border-gray-400/40 px-4 py-2 sm:first:border-r lg:not-last:border-r">
      {/* HEADER */}
      <div>
        <Header {...header} />
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      </div>

      {/* DETAILS AND PRICE */}
      <div className="mt-6">
        <Heading text="校正内容" />
        <p className="text-sm">{description}</p>
        <Price id={id} amount={price} />
        <div className="min-h-65">
          <Heading text="英語校正につく無料特典" />
          <ul className="mt-4 list-disc px-4">
            {benefits.map((ben) => (
              <li key={ben} className="text-sm text-balance not-first:mt-1.5">
                {ben}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SERVICES */}
      <div className="mt-6 min-h-68">
        <Services services={services} />
      </div>

      {/* ABOUT MORE LINK */}
      <div className="mt-6 w-full text-end">
        <Link
          href={moreDetails.link}
          className="text-sm text-[#0000FF] underline"
        >
          {moreDetails.label}
        </Link>
      </div>
    </div>
  );
}

export default PlanCard;
