/// <reference types='cypress'/>
/// <reference types="cypress-xpath" />
//import '../examples/PageObjects/HomePage'
import 'cypress-xpath'
import HomePage from '../examples/PageObjects/HomePage'

describe("Data Driven test", function()
 {

    this.beforeEach(function()
    
    {
        cy.fixture('UserName').then(data =>
        {
            this.data = data
        }
        )

    }
    )

   
it("my First data Drive Test",function()

{
    const homepage = new HomePage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homepage.getNameTextBox().type(this.data.name)
    homepage.SelectGenteroption().select(this.data.gender)
    homepage.getTwowayBIlingTextBox().should('have.value',this.data.name)
}

)
  
it("Check the Two Way Binding",function()

{
    const homepage = new HomePage()
     homepage.getTwowayBIlingTextBox().should('have.value',this.data.name)
}

)
  

it("Verify MaxLenth Values ",function()

{
    const homepage = new HomePage()
   cy.visit('https://rahulshettyacademy.com/angularpractice/')

   homepage.getNameTextBox().clear()
  // cy.get("input[name='name']:nth-child(2)").should('')

   homepage.getNameTextBox().invoke('attr', 'minlength').should('eq', '2')
   homepage.getNameTextBox().should('have.attr','minlength','2')
   homepage.getNameTextBox().type("A")
    homepage.getemailtxtbox().click()
   homepage.getnameErrorLabel().then(function(textValue)
   {
   const compareText = textValue.text()
   expect(compareText).to.equal('Name should be at least 2 characters')
 
   }

   



   )
 //  cy.get(".alert.alert-danger").should('have.value', 'Name should be at least 2 characters')
   
}

)

it("Verify Disabled ",function()

{
    const homepage = new HomePage()
   // cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homepage.getEntrepreneurRadio().should('be.enabled')
}

)

it("Verify the shop button ",function()
{
    const homepage = new HomePage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
      homepage.getshoplink().contains('Shop').click()
      
      //cy.searchproduct('iphone X')
console.log(this.data.productName)
this.data.productName.forEach(function(element) {
        cy.log(element)
        cy.searchproduct(element)
        cy.addContext(element);
      });
           
}
      
    )



}

)

