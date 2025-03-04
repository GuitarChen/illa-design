import { Meta, StoryFn } from "@storybook/react"
import { Calendar, CalendarProps } from "../src"

export default {
  title: "DATA DISPLAY/Calendar",
  component: Calendar,
} as Meta

const Template: StoryFn<CalendarProps> = (args) => {
  return <Calendar {...args} />
}

export const Basic = Template.bind({})
