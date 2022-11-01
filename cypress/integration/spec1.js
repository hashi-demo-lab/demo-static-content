/// <reference types="cypress" />

describe('Static site', () => {
    it('works', () => {
      cy.visit('/')
      //cy.contains('h1', 'GitLab + Cypress = ❤️')
    })
  })