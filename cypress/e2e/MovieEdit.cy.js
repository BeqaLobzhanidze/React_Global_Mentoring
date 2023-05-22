describe('edit movieForm related e2e tests', () => {

    it('if edit functionality is working', () => {
        cy.visit('http://localhost:3000/316029/edit');

        cy.get('[data-testid="title"]').clear().type('changeTitle')

        cy.get('[data-testid="form-submit"]').click();
        cy.get('[data-testid="moviedetail_title"]').should('contain' , 'changeTitle');
      });

      it('request is put', () => {
        cy.visit('http://localhost:3000/316029/edit');
        cy.intercept('PUT', 'http://localhost:4000/movies').as('putRequest');

        cy.get('[data-testid="title"]').clear().type('changeTitle')

        cy.get('[data-testid="form-submit"]').click();

        // Wait for the request to complete
        cy.wait('@putRequest').then((interception) => {
        // Check that the request method is PUT
        expect(interception.request.method).to.equal('PUT');
        });
      });
  
     
  });