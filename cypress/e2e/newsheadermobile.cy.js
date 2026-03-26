import flujitos from "./flujos/suites"; 

beforeEach(() =>{
    cy.viewport('iphone-8')
})

flujitos.headerMobileSuites() 