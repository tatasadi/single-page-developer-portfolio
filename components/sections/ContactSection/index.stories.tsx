import type { Meta, StoryObj } from "@storybook/react"
import ContactSection from "."

const meta = {
  title: "Sections/ContactSection",
  component: ContactSection,
  parameters: {},
} satisfies Meta<typeof ContactSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
