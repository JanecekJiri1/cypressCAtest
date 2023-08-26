export const testVideoSection = () => {
  
        it("Video is playing and is visible",() => {
          cy.get('.sectionTwo').should('be.visible').and('exist')
          cy.get('video').then(([videoEl]) => {
            expect(videoEl.paused).to.equal(false);
          });
          cy.get('video').should('have.attr', 'autoplay')
          cy.get('video').should('have.attr', 'loop');
      })
    
  }
