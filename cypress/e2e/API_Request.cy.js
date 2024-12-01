describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samin-sec.nadindev.ir/swagger/index.html');
  });

  it('sends request with token', () => {
      const token = Cypress.env('token');       //TODO: fix the token
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/furtherinformationquestion',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});

