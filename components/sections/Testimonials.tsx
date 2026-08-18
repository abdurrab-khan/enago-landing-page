import React from "react";
import Section from "../layout/Section";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

const Card = ({
  name,
  image,
  university,
}: {
  name: string;
  university: string;
  image: string;
}) => {
  return (
    <div className="aspect-2 relative overflow-hidden first:rounded-l-xl last:rounded-r-xl">
      <Image
        src={image}
        alt={name}
        height={200}
        width={200}
        className="h-96 w-auto"
      />
      <div className="absolute bottom-0 flex items-center justify-center gap-2 p-2.5 text-sm text-white">
        <span className="h-10 w-1 bg-red-500"></span>
        <div>
          <span className="mb-0.5 block font-semibold">{university}</span>
          <span className="block">{name}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCard = () => {
  return (
    <div className="px-4 lg:px-40">
      <div className="flex rounded-2xl p-6 shadow-2xl">
        {testimonials.items.map((t) => (
          <Card
            key={t.id}
            name={t.name}
            image={t.image}
            university={t.university}
          />
        ))}
      </div>
    </div>
  );
};

function Testimonials() {
  return (
    <Section>
      <div className="mt-12 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-semibold">{testimonials.title}</h1>
        <p className="mt-3 w-full text-center font-medium lg:w-1/3">
          {testimonials.description}
        </p>
        <TestimonialsCard />
      </div>
    </Section>
  );
}

export default Testimonials;
