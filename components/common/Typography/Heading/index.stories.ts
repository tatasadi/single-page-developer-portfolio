import type { Meta, StoryObj } from "@storybook/react"
import Heading from "."

const meta = {
  title: "Components/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-910&mode=dev",
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const HeadingXL: Story = {
  args: {
    children: "Heading XL",
    level: 1,
    size: "xl",
  },
}

export const HeadingL: Story = {
  args: {
    children: "Heading L",
    level: 2,
    size: "l",
  },
}

export const HeadingM: Story = {
  args: {
    children: "Heading M",
    level: 3,
    size: "m",
  },
}
