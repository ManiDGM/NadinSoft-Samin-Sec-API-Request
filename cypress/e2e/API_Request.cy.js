describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://samin-sec.nadindev.ir/swagger/index.html');
  });

  it('sends request to further information question', () => {
    const token = Cypress.env('API_TOKEN');
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

  it('sends request to attachments', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/attachments',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('sends request to profile', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/profile',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('sends request to education', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/education',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('sends request to occupation', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/occupation',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('sends request to relation', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/relation',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('sends request to professional degree', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/professionaldegree',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });

  it('sends request to further information answer', () => {
    const token = Cypress.env('API_TOKEN');
      cy.request({
        method: 'GET',
        url: 'https://samin-sec.nadindev.ir/api/v1/realprofile/furtherinformationanswer',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});

