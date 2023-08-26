export const testToDoSection = () => {

    it("make new task",() => {
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

}