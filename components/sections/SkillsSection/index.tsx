import Skill from "../../common/Skill"
import classNames from "classnames"

const skills = [
  {
    title: "HTML",
    experience: "4 Years",
  },
  {
    title: "CSS",
    experience: "4 Years",
  },
  {
    title: "Javascript",
    experience: "4 Years",
  },
  {
    title: "Accessibility",
    experience: "4 Years",
  },
  {
    title: "React",
    experience: "3 Years",
  },
  {
    title: "Sass",
    experience: "3 Years",
  },
]

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const SkillsSection: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <section
      className={classNames(
        className,
        "w-full px-4 sm:px-8 lg:px-[10.3125rem]",
      )}
      {...props}
    >
      <div className="grid w-full grid-cols-1 place-items-center gap-6 border-y border-white py-10 sm:grid-cols-2 sm:place-items-start sm:gap-[3.25rem] sm:border-b-0 sm:py-[3.25rem] lg:grid-cols-3 lg:gap-[3.625rem] lg:py-[4.5rem]">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            experience={skill.experience}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
