/// <reference types="cypress" />

describe('Automate CheckBo and Others', function()
{
    it("My First Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input[value='option1']").check().should('be.checked').and('have.value','option1')
        cy.get("input[value='option1']").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option1','option2'])

        cy.get('select').select('option2').should('have.value','option2')

       // cy.get('#autocomplete').type('Ind').wait(2000).select('India').should(('have.value','India'))
        
       cy.get('#autocomplete').type('Ind')
       cy.get('.ui-menu-item div').each(($s1,index,$list)=>{

        if ($s1.text()=='India'){
            cy.wrap($s1).click()
        }
       }
             
       )
        cy.get('#autocomplete').should("have.value",'India')

       cy.get('#displayed-text').should('be.visible')
       cy.get("input.btn-style.class2[value='Hide']").click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get("input.btn-style.class2[value='Show']").click()
       cy.get('#displayed-text').should('be.visible')

        // cy.get('#autocomplete').select('India').should(('have.value','India'))
    }
    
    )

}
)