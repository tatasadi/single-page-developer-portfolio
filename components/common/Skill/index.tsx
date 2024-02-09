import React from "react"
import Paragraph from "../Typography/Paragraph"
import Heading from "../Typography/Heading"

interface SkillProps {
  title: string
  experience: string
}

const Skill: React.FC<SkillProps> = ({ title, experience }) => {
  return (
    <div className="flex flex-col items-center sm:items-start sm:gap-[0.875rem]">
      <Heading level={2} size="l">
        {title}
      </Heading>
      <Paragraph>{experience} Experience</Paragraph>
    </div>
  )
}

export default Skill
