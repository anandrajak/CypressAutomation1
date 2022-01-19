/// <reference types="cypress" />

describe('Automate CheckBo and Others', function()
{
    it("My First Test Case", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[name="enter-name"]').type('Anand')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.get('[name="enter-name"]').type('Anand')
        cy.get('#alertbtn').click()
        cy.on("window:alert" , (Str) =>
         {
            expect(Str).to.equal('Hello Anand, share this practice page and share your knowledge')
        }
        )

        cy.on('window:confirm' , str1 => {

            expect(str1).to.equal("Hello , Are you sure you want to confirm?")            
        })

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy.com/#/index')
        cy.go('back')

        cy.get('tr td:nth-child(2)').each(($s2,index,$list) => {

            if ($s2.text().includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                    {
                        const priceTxt = price.text()
                        expect (price.text()).to.equal('25')
                        cy.log("priceTxt : "+ priceTxt)
                    }
                )
            }        
            }
    
        )


        cy.get('tr td:nth-child(2)').each(($s2,index,$list) => {

            if ($s2.text().includes('Python'))
            {
                cy.get('#product.table-display tbody tr td:nth-child(3)').eq(index).then(function(price)
                    {
                        const priceTxt = price.text()
                        expect (price.text()).to.equal('25')
                        cy.log("priceTxt : "+ priceTxt)
                    }
                )
            }        
            }
    
        )

    }
    
    )


}
)