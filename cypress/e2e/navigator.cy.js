describe('navigator', () => {
  it('Search functionality (Smoke Test)', () => {
    cy.searchFunctionality();
  });

  it('Menu content list', () => {
    cy.clickOnCoffeeMenuList();
  });

  it('Claim button', () => {
    cy.clickOnClaimBtn();
  });

  it('Suggestions', () => {
    cy.suggestionFunctionality();
    cy.suggestionCheckboxFunctionality();
  });
});
