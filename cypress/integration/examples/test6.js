/// <reference types='cypress'/>
/// <reference types='cypress-iframe'/>

import 'cypress-iframe'

describe('window open', function () {
    it('Test the Child Window Opens', function () {
           cy.visit('https://rahulshettyacademy.com/AutomationPractice')
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
      })
  
      cy.get('#openwindow').click()
      cy.get('@windowOpen').should('be.calledWith', 'http://www.qaclickacademy.com/')
    //   cy.window().then((win) => {
    //     win.location.href ='http://www.qaclickacademy.com/'
    //    // cy.get(".btn.btn-primary").click()
    //   })
    })
  })