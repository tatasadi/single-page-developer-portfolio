import type { Meta, StoryObj } from "@storybook/react"
import Textarea from "."

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    design: 
      {
        name: "Default",
        type: "figspec",
        url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-817&mode=dev",
      },
     
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "message",
    placeholder: "Message",
    value: "",
    onChange: () => {},
  },
}

export const WithText: Story = {
  args: {
    name: "message",
    placeholder: "Message",
    value: "FREDRICK JOULES |",
    onChange: () => {},
  },
}

export const WithErrors: Story = {
  args: {
    name: "message",
    placeholder: "Message",
    value: "FREDRICK JOULES |",
    onChange: () => {},
    errors: ["Sorry, invalid format here"],
  },
}
