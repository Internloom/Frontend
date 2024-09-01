import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/magicui/shiny-button";
import FlickeringGrid from "./magicui/flickering-grid";
import SparklesText from "@/components/magicui/sparkles-text";

const Hero = () => {
  return (
    <Section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 [mask:radial-gradient(125%_125%_at_50%_5%,#fff_25%,transparent_35%)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height="100%"
        width="100%"
      />

      <Container className="flex flex-col items-center text-center">
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex"></div>
            <h1 className="text-center text-gray-900 dark:text-gray-50 sm:text-6xl">
            Transforming Potential,{" "}
            <span className="inline-flex 
              leading-tight ">
                into Digital{" "}
                <SparklesText
                  text="Reality"
                  className="ml-2 leading-tight font-medium " 
                />
              </span>
               </h1>

            <h5 className="text-muted-foreground">
              <Balancer>
              From dynamic web designs and engaging mobile apps to innovative software and eye-catching graphics, our talented interns work alongside industry experts to deliver outstanding digital solutions. Join us and turn your creativity into real-world impact.{" "}
              </Balancer>
            </h5>
            <div className="mt-10 flex gap-4">
              <ShinyButton text="Register" className="" href="/some-link" />
              <Button variant={"ghost"} asChild>
                <Link href="/posts">Our Services -{">"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
