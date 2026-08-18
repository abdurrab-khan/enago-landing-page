import { pricingPlans } from "@/data/pricingPlans";
import Section from "../layout/Section";
import PlanCard from "../ui/plan-card/Card";

function Plans() {
  return (
    <Section>
      <div className="mx-auto grid w-full max-w-240 grid-cols-1 gap-y-6 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:px-0">
        {pricingPlans.map((p) => (
          <PlanCard key={p.id} {...p} />
        ))}
      </div>
    </Section>
  );
}

export default Plans;
