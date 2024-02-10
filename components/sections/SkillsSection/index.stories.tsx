import type { Meta, StoryObj } from "@storybook/react"
import SkillsSectioln from "."

const meta = {
  title: "Sections/SkillsSection",
  component: SkillsSectioln,
  parameters: {},
} satisfies Meta<typeof SkillsSectioln>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
