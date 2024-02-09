import type { Meta, StoryObj } from "@storybook/react"
import Button from "."

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-939&mode=dev",
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Contact me",
    type: "button",
  },
}
