import HeroSection from "@/components/sections/HeroSection"
import SkillsSection from "@/components/sections/SkillsSection"

export default function Home() {
  return (
    <main className="flex max-w-[90rem] flex-col items-center justify-between">
      <HeroSection />
      <SkillsSection />
    </main>
  )
}
