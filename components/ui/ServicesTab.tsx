"use client";
import { useState } from "react";
import { services as servicesData } from "@/data/services";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TKeys = keyof (typeof servicesData)["services"];

type TService = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const Services = ({ service }: { service: TService }) => {
  return (
    <div className="mt-6 flex w-full flex-col gap-12 px-4 lg:flex-row lg:px-30">
      <div className="flex-1 overflow-hidden rounded-lg">
        <Image
          height={400}
          width={300}
          src={service.image}
          alt={service.title}
          className="size-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-semibold">{service.title}</h2>
        <p className="mt-4">{service.description}</p>
      </div>
    </div>
  );
};

const Tabs = ({
  tabs,
  active,
  onTabChange,
}: {
  tabs: TKeys[];
  active: string;
  onTabChange: (key: TKeys) => void;
}) => {
  return (
    <ul className="flex w-full flex-col justify-center gap-4 px-4 lg:flex-row lg:gap-0 lg:px-64">
      {tabs.map((t) => (
        <li
          key={t}
          className={cn(
            "relative flex-1 cursor-pointer border border-gray-500/30 px-8 py-2.5 text-center text-xl font-semibold first:border-r-0",
            t === active &&
              "after:none bg-[#1d1d1d] text-white after:absolute after:-bottom-2 after:left-1/2 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:bg-[#1d1d1d] lg:after:block",
          )}
          onClick={() => onTabChange(t)}
        >
          {t}
        </li>
      ))}
    </ul>
  );
};

function ServicesTab() {
  const services = Object.keys(servicesData.services) as unknown as TKeys[];
  const [activeTab, setActiveTab] = useState<TKeys>(
    services[0] as unknown as TKeys,
  );

  const handleChangeTab = (tab: TKeys) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-6 w-full">
      <Tabs tabs={services} active={activeTab} onTabChange={handleChangeTab} />
      <Services service={servicesData.services[activeTab]} />
    </div>
  );
}

export default ServicesTab;
