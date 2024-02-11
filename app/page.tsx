import ContactSection from "../components/sections/ContactSection"
import HeroSection from "../components/sections/HeroSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import SkillsSection from "../components/sections/SkillsSection"
import patternCircle from "../public/images/pattern-circle.svg"
import patternRings from "../public/images/pattern-rings.svg"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative flex max-w-[90rem] flex-col items-center justify-between">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* background patterns */}
      <Image
        src={patternCircle}
        alt="pattern circle"
        width={129}
        height={129}
        className="lg:right-unset absolute -right-[4.0625rem] top-[15.875rem] z-20 sm:top-[29.4375rem] lg:left-[47.875rem] lg:top-[32.5625rem]"
        layout="fixed"
      />
      <div className="absolute -left-[21.375rem] top-[7.75rem] z-0 h-[8.0625rem] w-[33.125rem] sm:-left-[16.5625rem] sm:top-[5.375rem] lg:-left-[6.25rem] lg:top-[8.3125rem]">
        <Image src={patternRings} alt="pattern ring" width={530} height={129} />
      </div>
      <div className="absolute -right-[21.5rem] top-[80.4375rem] z-0 h-[8.0625rem] w-[33.125rem] sm:-right-[20.75rem] sm:top-[65.4375rem] lg:-right-[14.9375rem] lg:top-[67.3125rem]">
        <Image src={patternRings} alt="pattern ring" width={530} height={129} />
      </div>
      <div className="absolute -left-[21.375rem] bottom-[16.8125rem] z-0 h-[8.0625rem] w-[33.125rem] sm:bottom-[8.125rem] lg:-left-[12.8125rem] lg:bottom-[13.6875rem]">
        <Image src={patternRings} alt="pattern ring" width={530} height={129} />
      </div>
    </main>
  )
}
