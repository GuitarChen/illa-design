import { Meta, Story } from "@storybook/react"
import { Space } from "@illa-design/space"
import { Select, SelectProps, Option } from "../src"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Select",
  component: Select,
  argTypes: {
    value: {
      control: {
        type: "array",
      },
    },
    colorScheme: {
      options: [
        "gray",
        "blue",
        "purple",
        "red",
        "green",
        "yellow",
        "orange",
        "cyan",
        "white",
        "techPink",
        "techPurple",
        "grayBlue",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta

const options = [
  "Beijing",
  "Shanghai",
  "Guangzhou",
  "Shenzhen",
  "Chengdu",
  "Wuhan",
  "Dongguan",
  "Dalian",
  "Shanghai",
  "Hongkong",
  "Macau",
]

const Template: Story<SelectProps> = (args) => (
  <Space direction="vertical">
    <Select style={{ width: 280 }} {...args} />
    <Select
      showSearch={true}
      style={{ width: 280 }}
      options={options}
      defaultValue={"Shenzhen"}
      {...args}
    />
    <Select style={{ width: 280 }} placeholder="Select items" {...args}>
      <Option>Abc</Option>
      <Option>Bde</Option>
    </Select>
  </Space>
)

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
