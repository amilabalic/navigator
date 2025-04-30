class categoriesPage {
  createObjectHyperlink() {
    return cy.get('a[id*="ember"] span').eq(1);
  }

  coffeeMenuList() {
    return cy.get('div.name').eq(5);
  }

  searchInput() {
    return cy.get('input[id*="ember"]');
  }

  searchIcon() {
    return cy.get('a.icon span');
  }

  suggestionHyperlink() {
    return cy.get('#ember581');
  }

  nameInput() {
    return cy.get('#feedback > :nth-child(1) > input');
  }

  emailInput() {
    return cy.get('.emailcheck');
  }

  commentInput() {
    return cy.get('.required');
  }

  odustaniBtn() {
    return cy.get('.grey-button');
  }

  checkboxSuggestions() {
    return cy.get('.red > input');
  }
}
module.exports = new categoriesPage();
