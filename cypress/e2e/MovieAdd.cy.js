describe('add movieForm related e2e tests', () => {
    it('submiting empty form', () => {
      cy.visit('http://localhost:3000/new');

      cy.get('[data-testid="form-submit"]').click();

      cy.get('[data-testid="error"]').should('be.visible');
    });

    it('if add functionality is working', () => {
        cy.visit('http://localhost:3000/new');

        cy.get('[data-testid="title"]').type('reactMovie')
        cy.get('[data-testid="poster_path"]').type('https://testUrl')
        cy.get('[data-testid="release_date"]').type('2020-02-02')
        cy.get('[data-testid="overview"]').type('random overview')
        cy.get('[data-testid="runtime"]').type(120)
        cy.get('[data-testid="vote_average"]').type(6)
        cy.get('#genres').click();
        cy.contains('Crime').click();

        cy.get('[data-testid="form-submit"]').click();
        cy.get('[data-testid="moviedetail_title"]').should('contain' , 'reactMovie');
      });
  
     
  });