import Card from "@/components/common/Card"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Hello World!</h1>
      <Card
        imgName="project-1"
        imgAlt="Project 1"
        title="DESIGN PORTFOLIO"
        tags={["HTML", "CSS"]}
        projectUrl="https://www.frontendmentor.io"
        sourceCodeUrl="https://github.com"
      />
    </main>
  )
}
