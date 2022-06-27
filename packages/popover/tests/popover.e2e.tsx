import { Button } from "@illa-design/button"
import { mount, unmount } from "@cypress/react"
import { Popover } from "../src"
import "@testing-library/cypress"

it("Popover renders correctly", () => {
  mount(
    <Popover content="Popover" closeDelay={0} openDelay={0} position={"bottom"}>
      <Button>Hello</Button>
    </Popover>,
  )
  cy.findByText("Hello").click()
  cy.findByText("Hello").click()
  cy.wait(200)
  cy.findByText("Popover").should("exist")
  cy.findByText("Close").should("exist")
  cy.findByText("Close").click()
  cy.wait(200)
  cy.findByText("Popover").should("not.exist")
  unmount()
})

it("Popover renders with close button", () => {
  mount(
    <Popover hasCloseIcon trigger="click" content="Visible" position="bl">
      <Button>Button</Button>
    </Popover>,
  )
  cy.findByText("Button").click()
  cy.wait(200)
  cy.findByText("Close").should("exist")
  cy.findByText("Close").click()
  cy.findByText("Visible").should("not.exist")
  unmount()
})

it("Popover renders with visible event", () => {
  const onVisibleChange = cy.stub().as("onVisibleChange")
  mount(
    <Popover
      hasCloseIcon
      trigger="click"
      content="Visible"
      position="bl"
      onVisibleChange={onVisibleChange}
    >
      <Button>Button</Button>
    </Popover>,
  )
  cy.findByText("Button").click()
  cy.get("@onVisibleChange").should("be.calledWith", true)
  cy.wait(200)
  cy.findByText("Close").click()
  cy.get("@onVisibleChange").should("be.calledWith", false)
  unmount()
})
