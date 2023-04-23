describe('Search logic related e2e tests', () => {
  it('if app is starting', () => {
    cy.visit('http://localhost:3000')
  })
  it('Check if search functionality works on Submit', () => {
    cy.visit('http://localhost:3000');

    const searchQuery = 'The Golden Circle';

    const searchInput = cy.get('input[type="text"]');
    searchInput.clear();
    searchInput.type(searchQuery);
    const submitBtn = cy.get('[data-testid="searchForm"]')
    submitBtn.click();

		cy.get('[data-testid="movies"]').within(() => {
			cy.get('[data-testid="movie"]').should("contain", searchQuery)
		})
  });
})