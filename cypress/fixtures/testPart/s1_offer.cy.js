export const testOfferSection = () => {

    beforeEach("open page", () => {
      cy.visit("https://click-away-7fgctwzw4-janecekjiri1.vercel.app/");
      cy.get(".nav--language > .screanName[value='cs']").click({ force: true });
    });
    it("Our offer is visible and have all information",() => {
      cy.get('.sectionOne').should('be.visible')
      cy.get('.section--sceleton')
    cy.get(".section--sceleton").each((item, index) => {
    cy.wrap(item).should("be.visible");
    cy.wrap(item).find("img").should("be.visible");
    cy.wrap(item).find("h2").should("exist");
    cy.get('.status--taken');
    cy.wrap(item).find("p").should("exist");
    cy.get(` .sectionOne--sceleton--text > div > h4 > :nth-child(1) > .status--taken`)
      .should('be.visible')
      });
    })
  }
