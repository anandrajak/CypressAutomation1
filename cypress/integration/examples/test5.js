/// <reference types='cypress'/>
/// <reference types='cypress-iframe'/>

import 'cypress-iframe'

describe("Iframe Demo", function(){
it("Ifram test case",function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.frameLoaded('#courses-iframe')
cy.iframe().contains('Mentorship').click()
cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)
}
)

}
)