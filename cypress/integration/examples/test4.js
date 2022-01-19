/// <reference types='cypress'/>

describe("My forth Test",function()
{
    it.skip("My First Test case", function()
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
      //  cy.url().should('include', 'qaclickacademy')

    }
   
    )

    it("My Second Test case", function()
    {

       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show').contains('Top').click()
        //cy.contains('Top').click()
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click({ force: true }) // Force to Click on Element even in Hidden Mode without show method
             //  cy.url().should('include', 'qaclickacademy')
      

    }
   
    )
}

)