/// <reference types='cypress'/>

describe('window open', function () {
    it('Testthe Mock Response', function () {
           cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

           cy.intercept(
             { method: 'GET', 
             url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty' 
            }, 
           
           {
             statusCode:200,
             body : [
            {"book_name":"RestAssured with Java",
            "isbn":"RSU",
            "aisle":"2301"
            }]
          }

            ).as("bookResult")
   
            cy.get(".btn.btn-primary").click()
            cy.wait("@bookResult").should(({request,response}) =>
            {
                cy.get("tr").should('have.length', response.body.length+1)
            }
              )
            cy.get('p').should('have.text','Oops only 1 Book available')
  })



})
