import type { Meta, StoryObj } from "@storybook/react"
import Paragraph from "."

const meta = {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
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
  },
}
