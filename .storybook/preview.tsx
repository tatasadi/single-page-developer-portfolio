import type { Preview } from "@storybook/react"
import { Space_Grotesk } from "next/font/google"
import "../app/globals.css"
import React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={spaceGrotesk.className}>
        <Story />
      </main>
    ),
  ],
}

export default preview
