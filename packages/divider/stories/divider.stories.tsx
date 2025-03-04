import { Meta, StoryFn } from "@storybook/react"
import { Divider, DividerProps } from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Layout/Divider",
  component: Divider,
} as Meta

const Template: StoryFn<DividerProps> = (props) => (
  <Divider h="200px" {...props} />
)

export const Basic = Template.bind({})
