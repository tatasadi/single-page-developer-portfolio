import type { Meta, StoryObj } from "@storybook/react"
import Paragraph from "."

const meta = {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-910&mode=dev",
    },
  },
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is a paragraph.",
    className: "bg-yellow-600",
  },
}
