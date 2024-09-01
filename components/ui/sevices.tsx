// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Globe, Smartphone, Code, Layout, Image, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      href: "#footer", // Updated to point to the footer
      description:
        "Build responsive and user-friendly websites with our tailored web development services. From design to deployment, we ensure a seamless experience.",
      cta: "Learn More",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      href: "#footer", // Updated to point to the footer
      description:
        "Create powerful mobile applications for iOS and Android. We focus on intuitive design and smooth functionality to engage your users on the go.",
      cta: "Learn More",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      href: "#footer", // Updated to point to the footer
      description:
        "Develop custom software solutions that meet your business needs. Our solutions are designed to enhance efficiency and drive growth.",
      cta: "Learn More",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UX/UI Design",
      href: "#footer", // Updated to point to the footer
      description:
        "Enhance user experience with our UX/UI design services. We create visually appealing and user-centric designs that improve engagement and drive conversions.",
      cta: "Learn More",
    },
  ];
  

  const singleFeatureText: FeatureText[] = [
    {
        icon: <Image className="h-6 w-6" />,
        title: "Graphic Design",
        href: "#footer", // Updated to point to the footer
        description:
          "Make a lasting impression with our graphic design services. From branding and marketing materials to custom graphics, we create designs that resonate with your audience.",
        cta: "Learn More",
      },
  ];

const Services = () => {
  return (
    <Section id="services">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
            Explore Our Services
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>Discover the Range of Services We Offer to Drive Your Success and Innovation
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
          <div>
            {singleFeatureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
