export const testNavigationSection = () => {
    
    it("check language", () => {
       cy.get("html").should("have.attr", "lang", "en");
       cy.get(".nav--language > .screanName[value='cs']").click({ force: true });
       cy.get(".click-away--title:nth-child(1)").contains("Láska je kliknutí daleko");

       cy.request('https://click-away-7fgctwzw4-janecekjiri1.vercel.app/')
       .its('status')
      .should('equal', 200);
    });
  
    it("open and close MENU", () => {
      cy.get(".nav--leftSize--menuClick").click();
      cy.window().then((win) => {
         cy.wrap(win).its("document").then((doc) => {
            cy.wrap(doc).find(".menu--header--icon").should("exist");
            cy.wrap(doc).find(".menu--header--icon").click();
            });
      });
     });
      
     it("open social media", () => {
      cy.get(".nav--leftSize--menuClick").click();
     
     cy.get('.menu--footer--social--icons > a:nth-child(1)').should('have.attr', 'href', 'https://www.facebook.com/jiri.janecek.712' ),   
     cy.get('.menu--footer--social--icons > a:nth-child(2)').should('have.attr', 'href', 'https://www.instagram.com/jirka.janecek1/' ),
     cy.get('.menu--footer--social--icons > a:nth-child(3)').should('have.attr', 'href', 'https://www.linkedin.com/in/jirijanecek01/' ),
     cy.get('.menu--footer--social--icons > a:nth-child(4)') .should('have.attr', 'href', 'https://www.youtube.com/channel/UC4RzynFtynvafmysAaYA9Gw' )
     });
     // Text next projects
    it.skip("wait for fix ---- next projects", () => {
      cy.get(".nav--leftSize--menuClick").click();
      cy.get('.menu--portfolio > :nth-child(1)').click(),
       cy.get('[href="https://my-new-portfolio-rebuild.herokuapp.com/"]').invoke('attr', 'target', '_self').click()
      cy.request('https://my-new-portfolio-rebuild.herokuapp.com/')
      .its('status')
      .should('equal', 200);
     });

    it.skip("wait for fix ---- next projects2", () => {
       cy.get(".nav--leftSize--menuClick").click();
       cy.get('.menu--portfolio > :nth-child(2)').click(),
       cy.get('[href="https://wine-vajcner.herokuapp.com/"]').invoke('attr', 'target', '_self').click()
       cy.request('https://wine-vajcner.herokuapp.com/')
       .its('status')
       .should('equal', 200);
     });
    
     it("next projects3", () => {
       cy.get(".nav--leftSize--menuClick").click();
       cy.get('.menu--portfolio > :nth-child(3)').click(),
       cy.get('[href="https://food-order-portfolio.herokuapp.com/"]').invoke('attr', 'target', '_self').click()
       cy.request({
         url: 'https://food-order-portfolio.herokuapp.com/',
         failOnStatusCode: false // Povolíme, aby selhal na jiný než 2xx status kódy
      }).then((response) => {
        expect(response.status).to.equal(503);
      });
    });
    
     it("more information button", () => {
      cy.get(".header--button > .click-away--button").click();
      cy.get('.headerModal--bottom--close').click()
       cy.get(".header--button > .click-away--button").click();
       cy.get(".headerModal--body").should("exist");
       cy.get('.headerModal--top--close ').click()
       cy.get(".headerModal--body").should("not.exist");
     });
        
    it("Price button", () => {
        it('button Price', () => {
          cy.get('.header--button > a > .click-away--button').should('have.text', 'Ceník').and('be.enabled')
        })
     });
    
  }
