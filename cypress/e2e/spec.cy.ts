describe('Application E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/'); // Remplacez par l'URL de votre application si nécessaire
  });
  
  it('works',() => {
  });

  it('should load the home page', () => {
    cy.contains('Home'); // Remplacez par un élément unique de votre page d'accueil
  });

  it('should display a list of locations', () => {
    cy.get('app-housing-location').should('have.lengthOf.at.least', 1); // Ajustez le sélecteur et le nombre attendu
  });

  it('should display details of a location when clicked', () => {
    cy.get('app-housing-location').first().get(':nth-child(1) > .listing > a').click(); // Ajustez le sélecteur
    cy.contains('Acme Fresh Start Housing'); // Ajustez selon les détails attendus
    cy.contains('Paris');
    cy.contains('Île-de-France');
  });
  it('should fill out and submit the form on the house detail page', () => {
    cy.visit('http://localhost:4200/details/1'); // Remplacez par l'URL de la page de détails avec un ID valide

    // Remplir les champs du formulaire
    cy.get('input[formControlName="firstName"]').type('John'); // Remplacez par le sélecteur et la valeur appropriés
    cy.get('input[formControlName="lastName"]').type('Doe'); // Remplacez par le sélecteur et la valeur appropriés
    cy.get('input[formControlName="email"]').type('john.doe@examplecom'); // Remplacez par le sélecteur et la valeur appropriés

    // Soumettre le formulaire
    cy.get('form').submit();

    // Vérifier que la soumission a réussi
    cy.contains('John Doe john.doe@example.com applied !');  // Ajustez selon le message de succès attendu
  });
});