import Image from "next/image";
import img1 from "@/components/images/whychoose.svg";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Expertise",
      description:
        "With over 20 years of experience, we bring a wealth of knowledge and industry expertise to every project we undertake.",
    },
    {
      title: "Impact",
      description:
        "Driven by a passion to make a meaningful difference, we provide sustainable and transformative solutions with lasting impacts across Africa",
    },
    {
      title: "Innovation",
      description:
        "Our team is at the forefront of innovation, consistently pushing boundaries to deliver solutions that harness the latest advancements in technology",
    },
    {
      title: "Continuous Improvement",
      description:
        "Enhancing our Integrated Management System to exceed expectations and meet evolving needs",
    },
    {
      title: "Reliability",
      description:
        "Our clients trusts us for reliability, integrity, and unwavering commitment to excellence. We ensure consistent delivery of results that exceed expectations.",
    },
    {
      title: "Protecting the Environment",
      description:
        "Committing to environmental protection, pollution prevention, and the sustainable use of resources.",
    },
  ];

  return (
    <section id="why-choose-us" className=" pl-5 py-10 relative bg-white">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-center text-secondary text-4xl font-medium mb-16">
          Why Choose Us?
        </h2>

        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4 lg:px-12 pb-12 lg:pb-24">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              {reasons.map((reason, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-500 lg:w-1/2 h-[800px] lg:h-auto relative overflow-hidden">
            <Image
              src={img1 || "/placeholder.svg"}
              alt="Why Choose Us"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
