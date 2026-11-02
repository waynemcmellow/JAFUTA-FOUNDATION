
import ValueCard from "./valueCard";
import Newsletter from "./Newsletter";

function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description:
        "We act with transparency, accountability, and responsibility in stewarding every resource entrusted to us.",
    },
    {
      title: "Respect",
      description:
        "We honour people, culture, and the environment, working in harmony with communities and traditional leadership.",
    },
    {
      title: "Empowerment",
      description:
        "We build capacity, confidence, and opportunity—never dependency.",
    },
    {
      title: "Innovation",
      description:
        "We embrace creative ideas and practical solutions to make a lasting difference.",
    },
    {
      title: "Collaboration",
      description:
        "We work together with communities and partners to achieve shared goals.",
    },
    {
      title: "Sustainability",
      description:
        "We protect resources and create lasting opportunities for future generations.",
    },

    {
      title: "Compassion",
      description:
        "We lead with emphathy,humility, and deep respect for human dignity",
    },
  ];

  return (
    <>
      <section className="bg-[#eee5da] min-h-screen px-8 py-10">
        <h1 className="text-3xl font-normal text-[#252525] mb-16">
          Our Core Values
        </h1>

        <div className="max-w-[1056px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default CoreValues;
