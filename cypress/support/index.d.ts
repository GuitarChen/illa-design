/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Skip the component animation
     * @example
     * cy.skipMotion(selector,style)
     */
    skipMotion(selector: any, style?: string): Chainable<any>
  }
}
