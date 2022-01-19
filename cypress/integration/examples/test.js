// <reference types="cypress" />

describe("My First Automation in Cypress Suite" , function()
{
    it("My First Test Case", function()
    
    {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type("ca")
    cy.wait(2000)

     cy.get('.product:visible').should('have.length',4)
     cy.get('.products').as('productValue')
    cy.get('@productValue').find('.product').as("prodcutCount")

    cy.get('@productValue').find('.product').as("prodcutCount").should('have.length',4)

    cy.get('@productValue').find('.product').eq(2).contains("ADD TO CART").click().then(function()
    
    {

        console.log("Console: Print Data ")
    }
    )
  
   // Iterate of array --> each

    cy.get('@productValue').find('.product').each(($el,index,$list)=>
    {
        const vegVal =$el.find('.product-name').text()

        if (vegVal.includes('Carrot')){
            cy.wrap($el).find('button').click()

        }

    }
    )


    cy.get('.brand.greenLogo').as('productLogo').should('have.text','GREENKART')
        cy.get('@productLogo').then(function(LogoElement)
    {
        cy.log(LogoElement.text())
        
    }
    
    )
    
cy.get(".cart-icon").click()
cy.contains("PROCEED TO CHECKOUT").click()
cy.contains("Place Order").click()

    // cy.get('.products').find('.product-name').eq(2).should(($input) => {
    //     const value = $input.val();
    //     console.log(value); // do something with the value
    //     cy.get('.cart-icon').click()
    //     cy.wait(2000)
    //    const miniCartText = cy.get('div.product-info p.product-name:visible').text()

    //   })
    }

    )

}
)