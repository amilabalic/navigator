class editPage {
  tagoviInputField() {
    return cy.get('.tagit-new > .ui-widget-content');
  }

  odustaniBtn() {
    return cy.get('.cancel');
  }
}
module.exports = new editPage();
