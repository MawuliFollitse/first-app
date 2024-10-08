// Generated by Copilot
describe('Tests du formulaire du composant Details', () => {
  beforeEach(() => {
    // Visiter la page de détails avec un ID valide
    cy.visit('http://localhost:4200/details/1');
  });

  it('devrait charger correctement le formulaire', () => {
    // Vérifier que le formulaire existe
    cy.get('form').should('exist');
    cy.get('input[formControlName="firstName"]').should('exist');
    cy.get('input[formControlName="lastName"]').should('exist');
    cy.get('input[formControlName="email"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('devrait remplir et soumettre le formulaire', () => {
    // Remplir les champs du formulaire
    cy.get('input[formControlName="firstName"]').type('Jean');
    cy.get('input[formControlName="lastName"]').type('Dupont');
    cy.get('input[formControlName="email"]').type('jean.dupont@example.com');

    // Soumettre le formulaire
    cy.get('form').submit();

    // Vérifier que la soumission a réussi
    cy.contains('Jean Dupont jean.dupont@example.com applied !'); // Ajustez selon le message de succès attendu
  });

  it('devrait effacer le formulaire après soumission', () => {
    // Remplir les champs du formulaire
    cy.get('input[formControlName="firstName"]').type('Jean');
    cy.get('input[formControlName="lastName"]').type('Dupont');
    cy.get('input[formControlName="email"]').type('jean.dupont@example.com');

    // Soumettre le formulaire
    cy.get('form').submit();

    // Vérifier que les champs du formulaire sont vides après la soumission
    cy.get('input[formControlName="firstName"]').should('have.value', '');
    cy.get('input[formControlName="lastName"]').should('have.value', '');
    cy.get('input[formControlName="email"]').should('have.value', '');
  });

  it('devrait afficher des erreurs de validation pour une entrée invalide', () => {
    // Laisser les champs vides et soumettre le formulaire
    cy.get('form').submit();

    // Vérifier les messages d'erreur de validation
    cy.contains('First name is required'); // Ajustez selon les messages d'erreur attendus
    cy.contains('Last name is required'); // Ajustez selon les messages d'erreur attendus
    cy.contains('Email is required'); // Ajustez selon les messages d'erreur attendus

    // Remplir un email invalide et vérifier le message d'erreur
    cy.get('input[formControlName="email"]').type('email-invalide');
    cy.get('form').submit();
    cy.contains('Email is invalid'); // Ajustez selon les messages d'erreur attendus
  });
});