describe('Pruebas E2E de la Aplicacion Angular', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('1. Debe cargar el titulo principal de la aplicacion', () => {
    cy.get('#main-title').should('contain', 'Proyecto 4 - Angular Advanced');
  });

  it('2. Debe incrementar el contador de NgRx al hacer clic en un boton con tracking', () => {
    cy.get('#btn-extra').click();
    cy.get('#tracking-container').should('contain', 'Tag [btn-secundario]: 1 clicks');
  });

  it('3. Debe interactuar con la tarjeta animada y actualizar el tracker', () => {
    cy.get('app-animated-box button').click();
    cy.get('#tracking-container').should('contain', 'Tag [btn-animacion]: 1 clicks');
  });
});
