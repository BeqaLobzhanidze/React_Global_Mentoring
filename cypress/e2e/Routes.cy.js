describe('Routes spec', () => {
  it('Header and MovieListing should be visible on Home page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[type="text"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

		cy.get('[data-testid="active-genre"]').should('be.visible');
		cy.get('[data-testid="select"]').should('be.visible');
		cy.get('[data-testid="movies"]').should('be.visible');
  });

	it('MovieDetail and MovieListing should be visible on MovieDetail page', () => {
    cy.visit('http://localhost:3000/337167');
		cy.get('[data-testid="active-genre"]').should('be.visible');
		cy.get('[data-testid="select"]').should('be.visible');
		cy.get('[data-testid="movies"]').should('be.visible');
  });

  it('Check that SearchForm is not visible on Movie Detail page', () => {
    cy.visit('http://localhost:3000/337167');

		cy.get('input[type="text"]').should('not.exist');
    cy.get('button[type="submit"]').should('not.exist');
  });

  it('Check if query is changed when search input is updated', () => {
    cy.visit('http://localhost:3000/');

    const searchQuery = 'Harry';

    const searchInput = cy.get('input[type="text"]');
    searchInput.clear();
    searchInput.type(searchQuery);
    searchInput.type('{enter}');

		cy.location('search').should('include', `?query=${searchQuery}`);
  });

	it('Check if input contains text, that is passed in query', () => {
    const searchQuery = 'test';

    cy.visit(`http://localhost:3000/?query=${searchQuery}`);

    const searchInput = cy.get('input[type="text"]');
		searchInput.invoke('val').should('contain', searchQuery);
  });

	it('Check if SortControl value is set according to query', () => {
    const sortValue = 'TITLE';

    cy.visit(`http://localhost:3000/?sortBy=${sortValue.toLowerCase()}`);

    const selectedCriterion = cy.get('[data-testid="select"]');
		selectedCriterion.invoke('val').should('contain', sortValue);
  });

	it('Check if query is changed when SortControl value is changed', () => {
    cy.visit('http://localhost:3000/');

		cy.get('[data-testid="select"]').select('TITLE');

		cy.location('search').should('include', `?sortBy=title`);
  });
});