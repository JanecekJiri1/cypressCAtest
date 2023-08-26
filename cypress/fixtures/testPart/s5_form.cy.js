export const testFormSection = () => {

    it("valid form information",() => {
        cy.get('#navbar > a:nth-child(6)').click()
        cy.get('.sectionSixForm').should('be.visible').and('exist')
  
      })
}