class coffeePage {
  selectOptionMenuList() {
    return cy.contains('Caffe bar "JIL"');
  }

  changesBtn() {
    return cy.get('.btn-success');
  }

  claimBtn() {
    return cy.get('.btn-claim');
  }
}
module.exports = new coffeePage();
