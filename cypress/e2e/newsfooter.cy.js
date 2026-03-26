import flujitos from "./flujos/suites"; 

beforeEach(() =>{
    cy.viewport(1200,800)
    Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

flujitos.footerSuites()