import { Empty } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Empty render correctly", () => {
  render(<Empty data-testid="test-empty" />)
  expect(screen.getByTestId("test-empty")).toBeInTheDocument()
})

test("Empty render icon", () => {
  render(<Empty data-testid="test-icon" icon={<span>test icon</span>} />)
  expect(screen.getByTestId("test-icon")).toBeInTheDocument()
  expect(screen.getByText("test icon")).toBeInTheDocument()
})

test("Empty render description", () => {
  render(
    <Empty data-testid="test-description" description={"test description"} />,
  )
  expect(screen.getByTestId("test-description").lastChild).toHaveTextContent(
    "test description",
  )
})
