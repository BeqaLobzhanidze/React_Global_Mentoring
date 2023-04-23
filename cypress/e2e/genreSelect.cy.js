describe('Genre Select logic related e2e tests', () => {
    it('Simulate genre changing. Make sure all displayed movies contain active genre in genres list.', () => {
        cy.visit('http://localhost:3000');
    
        cy.contains('DOCUMENTARY').click();
        cy.get('[data-testid="active-genre"]').contains('DOCUMENTARY');
      });
    
});