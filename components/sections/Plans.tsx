import Section from "../layout/Section";

function Plans() {
  return (
    <Section>
      <div className="mx-auto mt-12 grid h-200 w-full max-w-240 grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:px-0">
        <div className="size-full bg-blue-500"></div>
        <div className="size-full bg-yellow-500"></div>
        <div className="size-full bg-orange-500"></div>
      </div>
    </Section>
  );
}

export default Plans;
