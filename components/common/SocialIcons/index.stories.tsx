import type { Meta, StoryObj } from "@storybook/react"
import SocialIcons from "."

const meta = {
  title: "Components/SocialIcons",
  component: SocialIcons,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SocialIcons>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
