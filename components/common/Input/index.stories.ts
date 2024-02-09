import type { Meta, StoryObj } from "@storybook/react"
import Input from "."

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    design: [
      {
        name: "Default",
        type: "figspec",
        url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-952&mode=dev",
      },
      {
        name: "With Text",
        type: "figspec",
        url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-956&mode=dev",
      },
      {
        name: "With Errors",
        type: "figspec",
        url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-961&mode=dev",
      },
    ],
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "name",
    placeholder: "Name",
    type: "text",
    value: "",
    onChange: () => {},
  },
}

export const WithText: Story = {
  args: {
    name: "name",
    placeholder: "Name",
    type: "text",
    value: "FREDRICK JOULES |",
    onChange: () => {},
  },
}

export const WithErrors: Story = {
  args: {
    name: "name",
    placeholder: "Name",
    type: "text",
    value: "FREDRICK JOULES |",
    onChange: () => {},
    errors: ["Sorry, invalid format here"],
  },
}
