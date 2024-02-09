import type { Meta, StoryObj } from "@storybook/react"
import Skill from "."

const meta = {
  title: "Components/Skill",
  component: Skill,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-693&mode=dev",
    },
  },
} satisfies Meta<typeof Skill>

export default meta

type Story = StoryObj<typeof meta>

export const HTML: Story = {
  args: {
    title: "HTML",
    experience: "4 Years",
  },
}
