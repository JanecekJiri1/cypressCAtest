
import '../fixtures/testPart/s0_browsing.cy.js'
import '../fixtures/testPart/s1_offer.cy.js';
import '../fixtures/testPart/s2_video.cy.js';
import '../fixtures/testPart/s3_price.cy.js'
import '../fixtures/testPart/s4_photo.cy.js';
import '../fixtures/testPart/s5_form.cy.js';
import '../fixtures/testPart/s6_footer.cy.js';
import '../fixtures/testPart/s7_ToDo.cy.js';


describe("template spec", () => {
  beforeEach("open page", () => {
    cy.visit("https://click-away-7fgctwzw4-janecekjiri1.vercel.app/");
    cy.get(".nav--language > .screanName[value='cs']").click({ force: true });
  });

  context('Scenario 0 navigation', () => { 
    const { testNavigationSection } = require('../fixtures/testPart/s0_browsing.cy.js');
    testNavigationSection();
  });

  context('Scenario 1 offer', () => { 
    const { testOfferSection } = require('../fixtures/testPart/s1_offer.cy.js');
    testOfferSection();
  });

  context('Scenario 2 video', () => { 
    const { testVideoSection } = require('../fixtures/testPart/s2_video.cy.js');
    testVideoSection();
  });

  context.only('scenario 3 Price', () => { 
    const { testPriceSection } = require('../fixtures/testPart/s3_price.cy.js');
    testPriceSection();
  });

  context('Scenario 4 photo', () => { 
    const { testPhotoSection } = require('../fixtures/testPart/s4_photo.cy.js');
    testPhotoSection();
  });

  context('Scenario 5 form', () => {
    const { testFormSection} = require('../fixtures/testPart/s5_form.cy.js')
    testFormSection()
  })

  context('Scenario 6 footer', () => {
    const {testFooterSection} = require ('../fixtures/testPart/s6_footer.cy.js')
    testFooterSection()
  })
  
  context('Scenario 7 To do list', () => {
    const {testToDoSection} = require ('../fixtures/testPart/s7_ToDo.cy.js')
    testToDoSection()
})


})

