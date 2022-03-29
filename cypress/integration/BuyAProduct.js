/// <reference types ="cypress" /> 
describe("Test Buy a product ", function(){


    it('TC10 unseccessfully buy a product',function(){
       cy.visit('http://localhost/')
       cy.get('#login > a').click()
       cy.wait(500)
       cy.get('#username-modal').type('darko.nastevski')
       cy.get('#password-modal').type('darko123')
       cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
       cy.get('.alert').contains('Login successful.') 
       cy.get(':nth-child(2) > .item > .product > .flip-container > .flipper > .front > a > .img-responsive').click({force: true})
       cy.get('#buttonCart').click()
       cy.get('#basket-overview > .btn').click({force:true})
       cy.get('#orderButton').click({force: true})
       cy.get('.alert').contains('Could not place order. Missing shipping or payment information.')
   })
   })