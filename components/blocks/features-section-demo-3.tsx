import React from "react";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import {
  IconWorld,
  IconBolt,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Globe, Users, Atom, Network, ChartColumnIncreasing, Briefcase, Award, Boxes } from "lucide-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Real-World Experience",
      description: "Work on live projects that challenge you to apply your knowledge in practical situations.",
      icon: <Globe />,
    },
    {
      title: "Mentorship and Guidance",
      description: "Learn from experienced professionals who are committed to helping you grow.",
      icon: <Users />,
    },
    {
      title: "Innovative Environment",
      description: "Be part of a dynamic team that embraces creativity and the latest technologies.",
      icon: <Atom />,
    },
    {
      title: "Networking Opportunities",
      description: "Build valuable connections with industry experts, mentors, and peers.",
      icon: <Network />,
    },
    {
      title: "Growth Potential",
      description: "Open the door to potential full-time opportunities based on your performance.",
      icon: <ChartColumnIncreasing />,
    },
    {
      title: "Flexible Work Arrangements",
      description: "Enjoy a flexible working environment that adapts to your schedule.",
      icon: <Briefcase />,
    },
    {
      title: "Professional Development",
      description: "Participate in workshops and training to enhance your skills and knowledge.",
      icon: <Boxes />,
    },
    {
      title: "Recognition and Rewards",
      description: "Get recognized for your contributions and potentially receive a stipend.",
      icon: <Award />,
    },
  ];

  return (
    <Section id="features" className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Why Choose InternLoom?</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Explore the Key Features of Our Internship Program and Discover the Benefits of Joining Our Team
            </Balancer>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
