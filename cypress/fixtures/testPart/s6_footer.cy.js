export const testFooterSection = () => {

    it("social media button",() => {
        cy.get('#footer').should('be.visible').and('exist')
        cy.get('#footer')
        cy.get('.footer--top > .footer--socialIcons').should('be.visible').and('exist')
   
        cy.get('.footer--top > .footer--socialIcons').find('a').should(($icons) => {
          expect($icons).to.have.length(4);
        });
  
  
        cy.get('.footer--top > .footer--socialIcons > a:nth-child(1)').should('have.attr', 'href',"https://www.facebook.com/jiri.janecek.712")
        cy.request('https://www.facebook.com/jiri.janecek.712')
        .its('status')
        .should('equal', 200);
  
        cy.get('.footer--top > .footer--socialIcons > a:nth-child(2)').should('have.attr', 'href', "https://www.instagram.com/jirka.janecek1/")
          // status code 999 
        // cy.request('https://www.instagram.com/jirka.janecek1/')
        // .its('status')
        // .should('equal', 200);
  
        cy.get('.footer--top > .footer--socialIcons > a:nth-child(3)').should('have.attr', 'href', "https://www.linkedin.com/in/jirijanecek01/")
        // status code 999 
        // cy.get('your-button-selector').should('be.enabled');
        // cy.request('https://www.linkedin.com/in/jirijanecek01/')
        // .its('status')
        // .should('equal', 200);
  
        cy.get('.footer--top > .footer--socialIcons > a:nth-child(4)').should('have.attr', 'href', "https://www.youtube.com/channel/UC4RzynFtynvafmysAaYA9Gw")
        cy.request('https://www.youtube.com/channel/UC4RzynFtynvafmysAaYA9Gw')
        .its('status')
        .should('equal', 200);
    })
  
    it('button Price', () => {
      cy.get('.footer--top--button > a > button').should('have.text', 'Ceník').and('be.enabled')
    })
    it.skip('wait for fix----- pop up text', () => {
      cy.get(':nth-child(1) > ul > :nth-child(1)').click()
      cy.get('[class*="Modal"]').should('exist')
    })
    it.skip('wait for fix-----Next projects open', () => {
      cy.get('.footer--nextProject').should('be.visible')
      cy.get('.footer--nextProject').find('h4').should(($projects) => {
        expect($projects).to.have.length(3);
      });
  
      cy.get('.footer--nextProject > h4:nth-child(1)').should('have.attr', 'href','https://my-new-portfolio-rebuild.herokuapp.com/')
      cy.get('.footer--nextProject > h4:nth-child(2)').should('have.attr', 'href','https://wine-vajcner.herokuapp.com/')
      cy.get('.footer--nextProject > h4:nth-child(3)').should('have.attr', 'href','https://food-order-portfolio.herokuapp.com/')
      
      })

}