import flujitos from "./flujos/suites"; 

beforeEach(() =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})

flujitos.tribuSuites()