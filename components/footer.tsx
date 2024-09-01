// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "./ui/button";

// Icon imports
import { Instagram, Linkedin, Facebook } from "lucide-react";

// Local component imports
import { Section, Container } from "./craft";

// Asset imports
import Logo from "@/public/logo.jpeg";

export default function Footer() {
  return (
    <footer>
      <Section id="footer" className="bg-gray-100 dark:bg-gray-800 py-8">
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6 items-center md:items-start">
            <Link href="/">
              <h3 className="sr-only">InternLoom</h3>
            </Link>
            <p className="text-center md:text-left">
              <Balancer>
                Transforming creativity into impactful digital solutions through web development, mobile apps, software, UX/UI design, and graphic design.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            <Link href="/aboutUs" className="hover:text-blue-500">About Us</Link>
            <Link href="/features" className="hover:text-blue-500">Features</Link>
            <Link href="/services" className="hover:text-blue-500">Services</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2 pt-6">
          <div className="flex gap-2 justify-center">
            <Link href="https://www.instagram.com/internloom" passHref>
              <Button variant="outline" size="icon">
                <Instagram />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/company/internloom" passHref>
              <Button variant="outline" size="icon">
                <Linkedin />
              </Button>
            </Link>
            <Link href="https://www.facebook.com/internloom" passHref>
              <Button variant="outline" size="icon">
                <Facebook />
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground text-center md:text-left">
            © <a href="https://internloom.com" className="hover:text-blue-500">InternLoom</a>. All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
