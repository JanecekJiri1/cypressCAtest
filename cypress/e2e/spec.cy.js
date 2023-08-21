


describe("template spec", () => {
  beforeEach("open page", () => {
    cy.visit("https://click-away-7fgctwzw4-janecekjiri1.vercel.app/");
    cy.get(".nav--language > .screanName[value='cs']").click({ force: true });
  });

  context ('basic project browsing', () => {


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
    
    it.skip("Price button", () => {
      // cy.get('.header--button > a > .click-away--button').click()
      cy.get('.header--button > a > .click-away--button').click().then(() => {
        // Ověření, že element s ID "price" je viditelný po zavolání scrollIntoView()
        cy.get('#price').scrollIntoView().should('be.visible');
        cy.get('#form').scrollIntoView().should('not.be.visible');
      });
      
    });

    it.skip("Navigation menu", () =>{})
  })

  context('Offer s1', () => {
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
    });
  })

  context('Video s2', () => {
    it("Video is playing and is visible",() => {
      cy.get('.sectionTwo').should('be.visible').and('exist')
      cy.get('video').then(([videoEl]) => {
        expect(videoEl.paused).to.equal(false);
      });
      cy.get('video').should('have.attr', 'autoplay')
      cy.get('video').should('have.attr', 'loop');
  })

    context('informations footer s09', () => {
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
  })
  

  context('To do list last section', () => {
    it("make new quest",() => {
      cy.get('.App').should('be.visible').and('exist')
      cy.get('.app-sidebar-header').should('be.visible').and('exist')
      cy.get('.app-sidebar-header').should('be.visible').and('exist')
      cy.get('.app-sidebar-header > button').click()
      cy.get('.app-sidebar-notes')
      cy.get('.app-sidebar-notes').find('.app-sidebar-note').should('exist');
  })

    let taskName = 'First task'
    let descriptionTask = 'nakoupit, uklidit, cviči'
    let taskName2 = 'Second task'
    let descriptionTask2 = 'Ťuk, ťuk ...'
    let changeTaskName = 'I am change'

    it("Change text",()=>{
      cy.get('.app-sidebar-header > button').click()
      cy.get('.app-main-note-edit')
      cy.get("#title[type='text']").should('have.value','Untitled Note')
      cy.get("#title[type='text']").clear().type(taskName)
      cy.get("#title[type='text']").should('have.value',taskName)
      
      cy.get("textarea[id='body']").click().type(descriptionTask)
      
      cy.get(".app-main-note-preview > .preview-title").should('have.text', taskName)
      cy.get(".app-main-note-preview > .markdown-preview").should('have.text', descriptionTask)
      
      // change name and description > make second task > change first task
      cy.get('.app-sidebar-header > button').click()
      cy.get("#title[type='text']").clear().type(taskName2)
      cy.get("textarea[id='body']").click().type(descriptionTask2)
      
      cy.contains(taskName).click();
      cy.get("#title[type='text']").clear().type(changeTaskName)

      cy.get('.app-sidebar-notes > :nth-child(1)').should('contain.text', changeTaskName)
      cy.get('.app-sidebar-notes > :nth-child(2)').should('contain.text', taskName2)

      // delete task
      cy.get('.app-sidebar-notes').find('.app-sidebar-note').should(($notes) => {
        expect($notes).to.have.length(2);
      });
      
      cy.contains('.app-sidebar-note',taskName2).find('.sidebar-note-title > button').click()
      cy.get('.app-sidebar-notes').find('.app-sidebar-note').should(($notes) => {
        expect($notes).to.have.length(1);
      });
    })
    })





  
  
})
});
