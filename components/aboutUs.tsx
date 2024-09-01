"use client"; // Marking this component as a Client Component

// React and Next.js imports
import React, { useEffect, useRef } from 'react';
import Link from "next/link";

// UI component imports
import { Section, Container } from "@/components/craft";
import { TracingBeam } from "./ui/tracing-beam";

// Asset imports
import Placeholder from "@/public/aboutus.jpg";

const AboutUs = () => {
  const navDialogRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);


  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  const handleMenu = () => {
    if (navDialogRef.current) {
      navDialogRef.current.classList.toggle('hidden');
    }
  };

  const setupIntersectionObserver = (element: HTMLElement, isLTR: boolean, speed: number) => {
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      const isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) {
        document.addEventListener('scroll', scrollHandler);
      } else {
        document.removeEventListener('scroll', scrollHandler);
      }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    const scrollHandler = () => {
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
      let totalTranslate = 0;
      if (isLTR) {
        totalTranslate = translateX + initialTranslateLTR;
      } else {
        totalTranslate = -(translateX + initialTranslateRTL);
      }
      element.style.transform = `translateX(${totalTranslate}px)`;
    };
  };

  useEffect(() => {
    if (line1Ref.current) setupIntersectionObserver(line1Ref.current, true, 0.15);
    if (line2Ref.current) setupIntersectionObserver(line2Ref.current, false, 0.15);
    if (line3Ref.current) setupIntersectionObserver(line3Ref.current, true, 0.15);


    const dtElements = document.querySelectorAll('dt');
    dtElements.forEach(element => {
      element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        if (ddId) {
          const ddElement = document.getElementById(ddId);
          const ddArrowIcon = element.querySelectorAll('i')[0];

          if (ddElement) {
            ddElement.classList.toggle('hidden'); // Toggle visibility of ddElement
          }

          if (ddArrowIcon) {
            ddArrowIcon.classList.toggle('-rotate-180');
          }
        }
      });
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Section id="about-us">
      <Container>
        <TracingBeam className="px-6">
          <h2>Internloom</h2>
          <p><strong>Unlock Your Potential</strong></p>
          <p>
            At InternLoom, we are committed to empowering the next generation of digital professionals. 
            Our internship program is crafted for those who are passionate about technology, design, and innovation. 
            Join us to work alongside experts, gain hands-on experience, and grow your career in the dynamic digital landscape.
          </p>

          <h3>Why Choose InternLoom?</h3>
          <ul>
            <li><strong>Real-World Experience:</strong> Work on live projects that challenge you to apply your knowledge in practical situations, preparing you for a successful career.</li>
            <li><strong>Mentorship and Guidance:</strong> Learn from experienced professionals who are dedicated to helping you grow and achieve your full potential.</li>
            <li><strong>Innovative Environment:</strong> Be part of a dynamic team that encourages creativity and embraces the latest technologies to solve real-world problems.</li>
            <li><strong>Growth Opportunities:</strong> Potential for a full-time position based on your performance during the internship, giving you a direct path to launch your career.</li>
            <li><strong>Networking and Connections:</strong> Build valuable relationships with industry leaders, mentors, and fellow interns that can benefit you throughout your career.</li>
          </ul>

          <h3>Start Your Journey with InternLoom</h3>
          <p>
            Ready to kickstart your career and gain hands-on experience in the digital world? Join us as an intern and be part of our innovative team. 
            <Link href="/contact">Contact us</Link> today to learn more about our internship opportunities and how you can make an impact with InternLoom.
          </p>

          <h2>Companies who belief in us</h2>

          
        </TracingBeam>

        <div ref={navDialogRef} id="nav-dialog" className="hidden">
        </div>

        <button onClick={handleMenu}></button>

        <div id="lines-group" className="flex flex-col items-center gap-4">
          <div ref={line1Ref} id="line1" className="flex gap-4 w-full max-w-6xl -translate-x-48 transition-transform ease-linear">
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 3.png" className="w-12 h-12 md:w-16 md:h-16" alt="Unbounce1" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 4.png" className="w-12 h-12 md:w-16 md:h-16" alt="LifeAt" />
              <span className="text-[12px] font-semibold lg:text-[16px]">LifeAt</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 5.png" className="w-12 h-12 md:w-16 md:h-16" alt="Convy" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Convy</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 6.png" className="w-12 h-12 md:w-16 md:h-16" alt="Morgen" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Morgen</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 7.png" className="w-12 h-12 md:w-16 md:h-16" alt="Campsite" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Campsite</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 8.png" className="w-12 h-12 md:w-16 md:h-16" alt="Rise" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Rise</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 9.png" className="w-12 h-12 md:w-16 md:h-16" alt="ClickUp" />
              <span className="text-[12px] font-semibold lg:text-[16px]">ClickUp</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 10.png" className="w-12 h-12 md:w-16 md:h-16" alt="Notion" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Notion</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 11.png" className="w-12 h-12 md:w-16 md:h-16" alt="Sunsama" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Sunsama</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 12.png" className="w-12 h-12 md:w-16 md:h-16" alt="Beeper" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Beeper</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 13.png" className="w-12 h-12 md:w-16 md:h-16" alt="Cal" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Cal</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 14.png" className="w-12 h-12 md:w-16 md:h-16" alt="Webstudio" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Webstudio</span>
            </div>
          </div>
          <div ref={line2Ref} id="line2" className="flex gap-4 w-full max-w-6xl -translate-x-36 transition-transform ease-linear">
          <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 15.png" className="w-12 h-12 md:w-16 md:h-16" alt="Unbounce" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce1</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 16.png" className="w-12 h-12 md:w-16 md:h-16" alt="LifeAt" />
              <span className="text-[12px] font-semibold lg:text-[16px]">LifeAt</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 17.png" className="w-12 h-12 md:w-16 md:h-16" alt="Convy" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Convy</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 18.png" className="w-12 h-12 md:w-16 md:h-16" alt="Morgen" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Morgen</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 19.png" className="w-12 h-12 md:w-16 md:h-16" alt="Campsite" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Campsite</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 20.png" className="w-12 h-12 md:w-16 md:h-16" alt="Rise" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Rise</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 21.png" className="w-12 h-12 md:w-16 md:h-16" alt="ClickUp" />
              <span className="text-[12px] font-semibold lg:text-[16px]">ClickUp</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 10.png" className="w-12 h-12 md:w-16 md:h-16" alt="Notion" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Notion</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 23.png" className="w-12 h-12 md:w-16 md:h-16" alt="Sunsama" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Sunsama</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 24.png" className="w-12 h-12 md:w-16 md:h-16" alt="Beeper" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Beeper</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 25.png" className="w-12 h-12 md:w-16 md:h-16" alt="Cal" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Cal</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 26.png" className="w-12 h-12 md:w-16 md:h-16" alt="Webstudio" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Webstudio</span>
            </div>
          </div>
          <div ref={line3Ref} id="line2" className="flex gap-4 w-full max-w-6xl -translate-x-36 transition-transform ease-linear">
          <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 3.png" className="w-12 h-12 md:w-16 md:h-16" alt="Unbounce1" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Unbounce</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 4.png" className="w-12 h-12 md:w-16 md:h-16" alt="LifeAt" />
              <span className="text-[12px] font-semibold lg:text-[16px]">LifeAt</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 5.png" className="w-12 h-12 md:w-16 md:h-16" alt="Convy" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Convy</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 6.png" className="w-12 h-12 md:w-16 md:h-16" alt="Morgen" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Morgen</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 7.png" className="w-12 h-12 md:w-16 md:h-16" alt="Campsite" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Campsite</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 8.png" className="w-12 h-12 md:w-16 md:h-16" alt="Rise" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Rise</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 9.png" className="w-12 h-12 md:w-16 md:h-16" alt="ClickUp" />
              <span className="text-[12px] font-semibold lg:text-[16px]">ClickUp</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 10.png" className="w-12 h-12 md:w-16 md:h-16" alt="Notion" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Notion</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 11.png" className="w-12 h-12 md:w-16 md:h-16" alt="Sunsama" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Sunsama</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 12.png" className="w-12 h-12 md:w-16 md:h-16" alt="Beeper" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Beeper</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 13.png" className="w-12 h-12 md:w-16 md:h-16" alt="Cal" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Cal</span>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-black rounded-xl border border-white md:min-h-32 md:min-w-32">
              <img src="./assets/asset 14.png" className="w-12 h-12 md:w-16 md:h-16" alt="Webstudio" />
              <span className="text-[12px] font-semibold lg:text-[16px]">Webstudio</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;