/// <reference types ="cypress" /> 



describe("Test Login Form ", function(){
   
    it ('TC1 GIVEN username, password WHEN they are empty THEN return exception',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 

     })
    it ('TC2 GIVEN username, password WHEN incorrect username, password empty THEN return exception',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC3 GIVEN username, password WHEN username empty,password wrong THEN return exception',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#password-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
     it ('TC4 GIVEN username, password WHEN they are wrong THEN return exception',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko')
        cy.get('#password-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC5 GIVEN username, password WHEN correct username,incorrect password THEN return exception',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko.nastevski')
        cy.get('#password-modal').type('darko')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC6 GIVEN username, password WHEN incorrect username,correct password THEN return exception',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko')
        cy.get('#password-modal').type('darko123')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Invalid login credentials.') 
})
    it ('TC7 GIVEN username, password WHEN they are correct THEN return "Login successful"',function(){
        cy.visit('http://localhost/')
        cy.get('#login > a').click()
        cy.wait(500)
        cy.get('#username-modal').type('darko.nastevski')
        cy.get('#password-modal').type('darko123')
        cy.get('#login-modal > .modal-dialog > .modal-content > .modal-body > form > .text-center > .btn').click()
        cy.get('.alert').contains('Login successful.') 
})

})
