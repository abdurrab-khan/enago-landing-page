import Section from "../layout/Section";
import { services } from "@/data/services";
import ServicesTab from "../ui/ServicesTab";

function Services() {
  return (
    <Section>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="w-full text-center text-4xl font-semibold text-black md:w-1/2">
          {services.title}
        </h1>
        <ServicesTab />
      </div>
    </Section>
  );
}

export default Services;
