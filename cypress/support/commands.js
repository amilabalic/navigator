import categoriesPage from '../page_objects/categoriesPage';
import coffeePage from '../page_objects/coffeePage';
import editPage from '../page_objects/editPage';

//Smoke test
Cypress.Commands.add('searchFunctionality', () => {
  cy.fixture('data').then((data) => {
    categoriesPage.searchInput().type(data.searchInput);
    cy.wait(500);
    categoriesPage
      .searchResult_1()
      .should('be.visible')
      .should('have.text', 'Pansion "Sebilj"');
    categoriesPage
      .searchResult_2()
      .should('be.visible')
      .should('have.text', 'Sebilj');
    categoriesPage.searchIcon().should('be.visible').click();
  });

  Cypress.Commands.add('categories', () => {
    categoriesPage.coffeeMenuList().click({ force: true });
    coffeePage.selectOptionMenuList().click({ force: true });

    coffeePage.changesBtn().click({ force: true });
    cy.fixture('data').then((data) => {
      editPage.tagoviInputField().type(data.coffeeTag).type('{enter}');
    });
    editPage.odustaniBtn().click();
  });

  Cypress.Commands.add('clickOnClaimBtn', () => {
    categoriesPage.coffeeMenuList().click({ force: true });
    coffeePage.selectOptionMenuList().click({ force: true });
    coffeePage.claimBtn().click();
  });

  Cypress.Commands.add('suggestionFunctionality', () => {
    categoriesPage.suggestionHyperlink().click();
    cy.fixture('data').then((data) => {
      categoriesPage.nameInput().type(data.ImeiPrezime);
      categoriesPage.emailInput().type(data.Email);
      categoriesPage.commentInput().type(data.comment);
    });
    categoriesPage.odustaniBtn().click();
  });

  Cypress.Commands.add('suggestionCheckboxFunctionality', () => {
    categoriesPage.suggestionHyperlink().click();
    categoriesPage.checkboxSuggestions().click();
  });
});
