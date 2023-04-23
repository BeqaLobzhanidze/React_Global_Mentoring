describe('Sort Select logic related e2e tests', () => {
    it('Check sorting functionality by release date', () => {
        cy.visit('http://localhost:3000');
    
            cy.get('[data-testid="select"]').select('RELEASE DATE');
    
    
            cy.get('[data-testid="movies"]').within(() => {
                cy.get('[data-testid="release-date"]').first().contains('1925');
            })
    
      });
    
});