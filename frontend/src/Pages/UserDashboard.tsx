import { useNavigate } from "react-router-dom";
import bmi_graph_image from "../Images/bmi_graph_image.png";
const callouts = [
  {
    name: "Know Your BMI Graph",
    description: "Know Your BMI Graph",
    imageSrc: `${bmi_graph_image}`,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "/bmichart",
  },
  {
    name: "Self-Improvement",
    description: "Diet Plans",
    imageSrc:
      "https://www.verywellfit.com/thmb/XoYUSTc0dd_4zpbsp6G_iBzh45A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Plant-baseddietjenifoto-73193eabbdc9402ab3bc535562e2ed7e.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Wrokout Plans",
    imageSrc:
      "https://info.totalwellnesshealth.com/hs-fs/hubfs/HealthBenefitsFitness.png?width=675&name=HealthBenefitsFitness.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/workoutchart",
  },
];

export default function UserDashBoard() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative hover:cursor-pointer"
                onClick={() => navigate(`${callout.href}`)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
