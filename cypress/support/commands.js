// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import addContext from 'mochawesome/addContext';

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('searchproduct', (productname) =>{
cy.get('h4.card-title').each(($s3,index, $list) =>     {
    if ( $s3.text().includes(productname) ) {
         cy.get('.btn.btn-info').eq(index).click()
     }
         
  }
      )

}
)

Cypress.Commands.add('addContext', (context) => {
    cy.once('test:after:run', (test) => addContext({ test }, context));
  });

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
