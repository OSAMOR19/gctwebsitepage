import Image from "next/image";
import icon from "@/components/images/goalsicon.svg";

export default function GoalsSection() {
  const goals = [
    {
      title: "Sustain Excellence",
      description: "Uphold The Highest Standards Of Quality, Integrity, And Professionalism Across All Subsidiaries.",
    },
    {
      title: "Enhance Stakeholder Value",
      description:
        "Ensure Long-Term Profitability And Success By Creating Value For Our Customers, Employees, And Shareholders.",
    },
    {
      title: "Innovate Continuously",
      description:
        "Leverage Cutting-Edge Technologies And Best Practices To Deliver Industry-Leading Solutions Across All Our Sectors.",
    },
  ];

  const centeredGoals = [
    {
      title: "Empower Communities",
      description:
        "Invest In Education, Clean Energy, And Community Development Projects To Drive Social And Economic Growth, Positively Impacting Lives And Livelihoods.",
    },
    {
      title: "Expand Reach",
      description:
        "Broaden Our Footprint Across Nigeria And Beyond, Creating Opportunities And Fostering Economic Development.",
    },
  ];

  return (
    <section id="goals-section" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-secondary text-center mb-10">Our Goals</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="text-primary mb-2 sm:mb-0 sm:mr-3">
                <Image src={icon} alt="Goal Icon" width={80} height={80} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-16 mt-12">
          {centeredGoals.map((goal, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center w-full md:w-2/5">
              <div className="text-primary mb-2 sm:mb-0 sm:mr-3">
                <Image src={icon} alt="Goal Icon" width={80} height={80} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{goal.title}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}