"use client";

// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What does InternLoom offer to its interns?",
    answer:
      "InternLoom provides valuable real-world experience, mentorship from industry experts, opportunities to work on live projects, and professional development resources including workshops and training.",
  },
  {
    question: "How can I apply for an internship at InternLoom?",
    answer:
      "You can start by visiting our Careers page and submitting your application. Our team will review your application, and if you meet our criteria, we will contact you for an interview.",
  },
  {
    question: "What is the structure of the internship program?",
    answer:
      "Our internship program is designed to be immersive and hands-on, featuring structured projects, regular feedback sessions, and opportunities for skill development. We ensure that each intern is actively involved in meaningful work and receives continuous guidance.",
  },
  {
    question: "How long does the internship program last?",
    answer:
      "The duration of the internship program varies depending on the role and your availability. Typically, internships range from 8 to 12 weeks, with flexibility to accommodate different schedules.",
  },
];



const FAQ = () => {
  return (
    <Section id="faq" >
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
