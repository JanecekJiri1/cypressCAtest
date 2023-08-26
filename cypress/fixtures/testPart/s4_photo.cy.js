export const testPhotoSection = () => {

    it("photo slider s5",() => {
      cy.get('#navbar > a:nth-child(4)').click()
      cy.get('.SectionFour').should('be.visible').and('exist')
      cy.get('.sectionFour--Carousel > .container-carousal > .carousel').find('.carousel-indicator-item').should(($icons) => {
        expect($icons).to.have.length(3);
      });
      for (let i = 1; i <= 3; i++) {
        cy.get(`.carousel > .carousel--inner > .carousel--item:nth-child(${i}) > .imgSectionFour`)
          .find('img')
          .should(($img) => {
            expect($img).to.have.length(3);
          });
      }

      cy.get('.sectionFour--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(1)').click({force: true})
      cy.get(':nth-child(1) > .imgSectionFour > :nth-child(1)').should('be.visible').and('exist')
      cy.get(':nth-child(1) > .imgSectionFour > :nth-child(2)').should('be.visible').and('exist')
      cy.get(':nth-child(1) > .imgSectionFour > :nth-child(3)').should('be.visible').and('exist')

      cy.get('.sectionFour--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(2)').click({force: true})
      cy.get(':nth-child(2) > .imgSectionFour > :nth-child(1)').should('be.visible').and('exist')
      cy.get(':nth-child(2) > .imgSectionFour > :nth-child(2)').should('be.visible').and('exist')
      cy.get(':nth-child(2) > .imgSectionFour > :nth-child(3)').should('be.visible').and('exist')

      cy.get('.sectionFour--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(3)').click({force: true})
      cy.get(':nth-child(3) > .imgSectionFour > :nth-child(1)').should('be.visible').and('exist')
      cy.get(':nth-child(3) > .imgSectionFour > :nth-child(2)').should('be.visible').and('exist')
      cy.get(':nth-child(3) > .imgSectionFour > :nth-child(3)').should('be.visible').and('exist')

  })

it('gallery s6', () => {

  cy.get('#navbar > a:nth-child(5)').click()
  cy.get('.sectionFive').should('be.visible').and('exist')
  cy.get('.sectionFive--Carousel > .container-carousal > .carousel').find('.carousel-indicator-item').should(($icons) => {
    expect($icons).to.have.length(4);
  });
    
    cy.get('.sectionFive--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(1)').click({force: true})
    cy.get(':nth-child(1) > .sectionFive--carousel--img--container > img').should('be.visible').and('exist')
    cy.get('.sectionFive--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(2)').click({force:true})
    cy.get(':nth-child(2) > .sectionFive--carousel--img--container > img').should('be.visible').and('exist')
    cy.get('.sectionFive--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(3)').click({force:true})
    cy.get(':nth-child(3) > .sectionFive--carousel--img--container > img').should('be.visible')
    cy.get('.sectionFive--Carousel > .container-carousal > .carousel > .carousel-indicators > :nth-child(4)').click({force:true})
    cy.get(':nth-child(4) > .sectionFive--carousel--img--container > img').should('be.visible')

  })
    
    it('open and close photo gallery',()=> {
      cy.get('#gallery > a > .click-away--button').should('have.text', 'Vice fotografii').and('be.enabled').click({force: true})
      cy.get('#PhotoGallery').should('exist')
      cy.get('.click-away--button').click()
      cy.get('#PhotoGallery').should('not.exist')
    })
    
    it('open sinfl photo in gallery',()=> {
      cy.get('#gallery > a > .click-away--button').should('have.text', 'Vice fotografii').and('be.enabled').click({force: true})

      cy.get('.pics').should('exist').then(($pics) => {
        const numberOfPics = $pics.length;
      
        for (let i = 0; i < numberOfPics; i++) {
          // Pro každý prvek provedete akce
          cy.get('.pics').eq(i).click({force:true});
        cy.get('.modal.open').should('exist')
        cy.get('img').should('be.visible')
    }
  })

  cy.get('.click-away--button.returnButton--gallery').click()
  cy.get('.modal.open').should('not.exist')
  cy.get('#PhotoGallery').should('not.exist')
  cy.get('#header').should('be.visible')
    })
  
}