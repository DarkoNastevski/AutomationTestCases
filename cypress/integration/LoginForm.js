/// <reference types ="cypress" /> 



describe("Test Login Form ", function(){
   
    it ('TC1 empty fields,password and username ',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 

     })
    it ('TC2 incorect username, empty password ',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC3 empty username,incorect password ',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#password-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
     it ('TC4 incorect username,incorect password ',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko')
        cy.get('#password-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC5 correct username, incorrect password',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko.nastevski')
        cy.get('#password-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC6 incorrect username, correct password',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko')
        cy.get('#password-modal').type('darko123')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC7 correct username, correct password ',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko.nastevski')
        cy.get('#password-modal').type('darko123')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Login successful.') 
})

})
