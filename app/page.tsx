import { Section, Main, Container } from "@/components/craft";
import Image from "next/image";
import Hero from "@/components/hero";
import AboutUs from "@/components/aboutUs";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { FeaturesSectionDemo } from "@/components/blocks/features-section-demo-3";
import Services from "@/components/ui/sevices";




export default function Home() {
  return (
    
    <Main>
     <Hero/>
      <Section>   
        <Container>
          <AboutUs/>
          <FeaturesSectionDemo/>
          <Services/>
          <FAQ/>
          <Footer/>
        </Container>
      </Section>
    </Main>
  );

}
