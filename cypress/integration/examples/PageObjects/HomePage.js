import 'cypress-xpath'
class HomePage{

    getemailtxtbox(){
    return cy.get("input[name='email']")
    }
getNameTextBox() {
    return cy.get("input[name='name']:nth-child(2)")
}

SelectGenteroption(){
    return cy.get("#exampleFormControlSelect1")
}

getTwowayBIlingTextBox(){
    return cy.get("input[name='name']:nth-child(1)")
}

getEntrepreneurRadio(){
    return cy.get(".form-check-label[for='inlineRadio3']")
}


getnameErrorLabel(){
    return  cy.xpath("//div[contains(text(),'Name should be at least 2 characters')]")
}
getshoplink(){
  return  cy.get(".nav-link")
}

}

export default HomePage