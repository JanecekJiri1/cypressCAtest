export const testPriceSection = () => {

    it("Price information",() => {
        cy.get('.sectionThree').should('be.visible').and('exist')
        cy.get('.sectionThree--concept--boxs')

        cy.get('.sectionThree--concept--boxs').find('.sectionThree--box').should(($table) => {
            expect($table).to.have.length(4);
        })

        cy.get(".sectionThree--box--back" ).should("not.be.visible");
        cy.get(':nth-child(1) > .sectionThree--box--inner > .sectionThree--box--front')
        .trigger("mouseover").click();
        cy.get(".sectionThree--box--back").should("be.visible");
       
    })

    it.only("Price button change",() => {
        cy.get('.sectionThree--concept--top').find('li').should(($option) => {
            expect($option).to.have.length(3);
        })
        cy.get('.sectionThree--concept--top > li:nth-child(1)').should('have.text', 'Základní')
        cy.get(':nth-child(1) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','19§' )
        cy.get(':nth-child(2) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','28§' )
        cy.get(':nth-child(3) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','36§' )
        cy.get(':nth-child(4) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','30§ / den' )

        cy.get('.sectionThree--concept--top > li:nth-child(2)').should('have.text', 'Pokročilý').click()
        cy.get(':nth-child(1) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','28§' )
        cy.get(':nth-child(2) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','32§' )
        cy.get(':nth-child(3) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','39§' )
        cy.get(':nth-child(4) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','49§ / den' )

        cy.get('.sectionThree--concept--top > li:nth-child(3)').should('have.text', 'Doplňky').click()
        cy.get(':nth-child(1) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','11§' )
        cy.get(':nth-child(2) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','17§' )
        cy.get(':nth-child(3) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','24§' )
        cy.get(':nth-child(4) > .sectionThree--box--inner > .sectionThree--box--front > h3').should('have.text','42§' )
       
    })

}