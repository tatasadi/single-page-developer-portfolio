import Button from "../../common/Button"
import Heading from "../../common/Typography/Heading"
import classNames from "classnames"
import Card from "../../common/Card"

const cards = [
  {
    imgName: "project-1",
    imgAlt: "Project 1",
    title: "DESIGN PORTFOLIO",
    tags: ["HTML", "CSS"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
  {
    imgName: "project-2",
    imgAlt: "Project 2",
    title: "E-LEARNING LANDING PAGE",
    tags: ["HTML", "CSS"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
  {
    imgName: "project-3",
    imgAlt: "Project 3",
    title: "TODO WEB APP",
    tags: ["HTML", "CSS", "Javascript"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
  {
    imgName: "project-4",
    imgAlt: "Project 4",
    title: "ENTERTAINMENT WEB APP",
    tags: ["HTML", "CSS", "Javascript"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
  {
    imgName: "project-5",
    imgAlt: "Project 5",
    title: "MEMORY GAME",
    tags: ["HTML", "CSS", "Javascript"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
  {
    imgName: "project-6",
    imgAlt: "Project 6",
    title: "ART GALLERY SHOWCASE",
    tags: ["HTML", "CSS", "Javascript"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
]

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProjectsSection: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <section
      className={classNames(
        className,
        "w-full px-4 pb-20 sm:px-8 sm:pb-[6.25rem] lg:px-[10.3125rem]",
      )}
      {...props}
    >
      <div className="mb-10 mt-20 flex items-center justify-between sm:mb-[3.75rem] sm:mt-12 lg:mb-20 lg:mt-[4.25rem]">
        <Heading level={2} size="xl">
          Projects
        </Heading>
        <Button type="button">Contact me</Button>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-[3.75rem] lg:gap-x-[1.875rem] lg:gap-y-[4.3125rem]">
        {cards.map((card, index) => (
          <Card
            key={index}
            imgName={card.imgName}
            imgAlt={card.imgAlt}
            title={card.title}
            tags={card.tags}
            projectUrl={card.projectUrl}
            sourceCodeUrl={card.sourceCodeUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
