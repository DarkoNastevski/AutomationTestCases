/// <reference types ="cypress" /> 

describe("Test filter the product", function(){
    it('TC10 GIVEN filter, WHEN selected black and clicked "apply" THEN filter only black products',function(){
    cy.visit('http://localhost/')
    cy.get('#login > a').click()
    cy.wait(500)
    cy.get('#username-modal').type('darko.nastevski')
    cy.get('#password-modal').type('darko123')
    cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
    cy.get('.alert').contains('Login successful.') 
    cy.get('#navbar > .container').contains('Catalogue').click({force: true})
    cy.get('.panel-body').contains('black').click({force: true})
    cy.get('.panel-body').contains('Apply').click({force: true})


})

})