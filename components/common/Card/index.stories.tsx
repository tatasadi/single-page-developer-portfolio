import type { Meta, StoryObj } from "@storybook/react"
import Card from "."

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-736&mode=dev",
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Project1: Story = {
  args: {
    imgName: "project-1",
    imgAlt: "Project 1",
    title: "DESIGN PORTFOLIO",
    tags: ["HTML", "CSS"],
    projectUrl: "https://www.frontendmentor.io",
    sourceCodeUrl: "https://github.com",
  },
}
