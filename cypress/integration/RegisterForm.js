/// <reference types ="cypress" /> 

describe("Test Register", function(){
    it('TC8 Register with empty gmail field',function(){
          cy.visit('http://localhost/')
          cy.get('#register > a').click()
          cy.wait(500)
          cy.get('#register-username-modal').type('Darko') 
          cy.get('#register-first-modal').type('Darko') 
          cy.get('#register-last-modal').type('Darko') 
          cy.get('#register-password-modal').type('Darko') 
          cy.get('#register-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
          cy.get('.alert').contains('There was a problem with your registration: Internal Server Error')
    })
  
          it('TC9 Register successfully ',function(){
      cy.visit('http://localhost/')
      cy.get('#register > a').click()
      cy.wait(500)
      cy.get('#register-username-modal').type('Darko8') 
      cy.get('#register-first-modal').type('Darko') 
      cy.get('#register-last-modal').type('Darko') 
      cy.get('#register-email-modal').type('darko.nastevski111+08@gmail.com')
      cy.get('#register-password-modal').type('Darko') 
      cy.get('#register-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
      cy.get('.alert').contains('Registration and login successful.')
          
  
  })
  })