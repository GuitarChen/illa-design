import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { LikeIcon } from "@illa-design/icon"
import { Steps } from "../src"
import { ReactNode } from "react"

const { Step } = Steps

test("Steps render with title", () => {
  render(
    <Steps>
      <Step title="Succeed" />
      <Step title="Process" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByText("Succeed")).toBeInTheDocument()
  expect(screen.getByText("Process")).toBeInTheDocument()
  expect(screen.getByText("Wait")).toBeInTheDocument()
})

test("Steps render with description", () => {
  render(
    <Steps>
      <Step title="Succeed" description="This is a description" />
      <Step title="Process" />
    </Steps>,
  )

  expect(screen.getByText("This is a description")).toBeInTheDocument()
})

test("Steps render without step components should render nothing", () => {
  render(<Steps data-testid="steps" />)

  expect(screen.getByTestId("steps").children.length).toBe(0)
})

test("Steps render with only span element should render nothing", () => {
  render(
    <Steps>
      <span>Hello</span>
    </Steps>,
  )

  expect(screen.queryByText("Hello")).toBeNull()
})

test("Steps render with current step 2", () => {
  render(
    <Steps current={2}>
      <Step title="Succeed" />
      <Step title="Process" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByText("Succeed")).toBeInTheDocument()
  expect(screen.getByText("Process")).toBeInTheDocument()
  expect(screen.getByText("Wait")).toBeInTheDocument()
})

test("Steps render vertical label", () => {
  render(
    <Steps data-testid="steps" labelPlacement="vertical">
      <Step title="Succeed" />
      <Step title="Process" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render index", () => {
  render(
    <Steps>
      <Step title="Succeed" />
      <Step title="Process" />
    </Steps>,
  )

  expect(screen.getByText("2")).toBeInTheDocument()
})

test("Steps render custom icon", () => {
  render(
    <Steps>
      <Step
        icon={<LikeIcon data-testid="link-icon" />}
        title="Succeed"
        description="This is a description"
      />
    </Steps>,
  )
  expect(screen.getByTestId("link-icon")).toBeInTheDocument()
})

test("Steps render custom dot", () => {
  const customDot = (dot: ReactNode, { index }: { index: number }) => (
    <div title={`dot-index-${index}`}> {dot}</div>
  )
  render(
    <Steps customDot={customDot}>
      <Step title="Succeed" description="This is a description" />
    </Steps>,
  )
  expect(screen.getByTitle("dot-index-1")).toBeInTheDocument()
})

test("Steps render with process status", () => {
  render(
    <Steps data-testid="steps">
      <Step title="Finish" />
      <Step title="Process" />
      <Step title="Wait" />
    </Steps>,
  )
  expect(screen.getByText("2")).toBeInTheDocument()
  expect(screen.getByText("3")).toBeInTheDocument()
  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with error status", () => {
  render(
    <Steps data-testid="steps" status="error">
      <Step title="Error" />
    </Steps>,
  )

  expect(screen.getByText("Error")).toBeInTheDocument()
  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with finish status", () => {
  render(
    <Steps data-testid="steps" status="finish">
      <Step title="Finish" />
    </Steps>,
  )

  expect(screen.getByText("Finish")).toBeInTheDocument()
  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with no line", () => {
  render(
    <Steps data-testid="steps" lineless>
      <Step title="Error" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with vertical", () => {
  render(
    <Steps data-testid="steps" direction="vertical">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with dot variant", () => {
  render(
    <Steps data-testid="steps" variant="dot">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with dot variant with vertical direction", () => {
  render(
    <Steps data-testid="steps" variant="dot" direction="vertical">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps render with navigation variant", () => {
  render(
    <Steps data-testid="steps" variant="navigation">
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps onChange should be triggered", () => {
  const clickEvent = jest.fn()
  render(
    <Steps data-testid="steps" onChange={clickEvent} current={1}>
      <Step title="Succeeded" />
      <Step title="Wait" />
    </Steps>,
  )

  screen.getByText("Wait").click()
  expect(clickEvent).toBeCalled()
})

test("Steps onChange should be triggered if step is disabled", () => {
  const clickEvent = jest.fn()
  render(
    <Steps data-testid="steps" onChange={clickEvent} current={1}>
      <Step title="Succeeded" />
      <Step title="Wait" disabled />
    </Steps>,
  )

  screen.getByText("Wait").click()
  expect(clickEvent).not.toBeCalled()
})

test("Steps with vertical direction and error status should render error style", () => {
  render(
    <Steps data-testid="steps" direction="vertical" current={2} status="error">
      <Step title="Succeeded" />
      <Step title="Error" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Only last step render error style", () => {
  render(
    <Steps data-testid="steps" direction="vertical" current={3} status="error">
      <Step title="Succeeded" />
      <Step title="Error" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})

test("Steps with dot variant and error status should render error style", () => {
  render(
    <Steps
      data-testid="steps"
      variant="dot"
      direction="vertical"
      current={2}
      status="error"
    >
      <Step title="Succeeded" />
      <Step title="Error" />
      <Step title="Wait" />
    </Steps>,
  )

  expect(screen.getByTestId("steps")).toMatchSnapshot()
})
