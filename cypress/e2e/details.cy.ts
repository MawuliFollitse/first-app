 describe('Details Component Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/details/1'); // Remplacez par l'URL de la page de détails avec un ID valide
  });

  it('should load the form correctly', () => {
    cy.get('form').should('exist');
    cy.get('input[formControlName="firstName"]').should('exist');
    cy.get('input[formControlName="lastName"]').should('exist');
    cy.get('input[formControlName="email"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should fill out and submit the form', () => {
    // Remplir les champs du formulaire
    cy.get('input[formControlName="firstName"]').type('John');
    cy.get('input[formControlName="lastName"]').type('Doe');
    cy.get('input[formControlName="email"]').type('john.doe@example.com');

    // Soumettre le formulaire
    cy.get('form').submit();

    // Vérifier que la soumission a réussi
    cy.contains('John Doe john.doe@example.com applied !'); // Ajustez selon le message de succès attendu
  });

  it('should clear the form after submission', () => {
    // Remplir les champs du formulaire
    cy.get('input[formControlName="firstName"]').type('John');
    cy.get('input[formControlName="lastName"]').type('Doe');
    cy.get('input[formControlName="email"]').type('john.doe@example.com');

    // Soumettre le formulaire
    cy.get('form').submit();

    // Vérifier que les champs du formulaire sont vides après la soumission
    cy.get('input[formControlName="firstName"]').should('have.value', '');
    cy.get('input[formControlName="lastName"]').should('have.value', '');
    cy.get('input[formControlName="email"]').should('have.value', '');
  });
});