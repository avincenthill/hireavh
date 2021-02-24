describe('routing', () => {
  const paths = [
    '/',
    '/home',
    'about',
    '/resume',
    '/contact',
    '/sorting-algorithms',
    '/blog',
    '/projects',
    '/graphic-design',
    '/dynamic-form',
  ];

  paths.forEach((path) => {
    describe(path, () => {
      it(`should land on ${path}`, () => {
        cy.visit(path);
      });
    });
  });
});

describe('navigation', () => {
  const elements = ['header', 'footer'];
  for (let element of elements) {
    describe(element, () => {
      it(`should land on /about after click`, () => {
        cy.visit('/');
        cy.get(`.${element}-container`).click();
        cy.url().should('include', '/about');
      });
    });
  }

  describe('nav-list', () => {
    const navPaths = ['about', 'blog', 'projects', 'resume', 'contact'];
    for (let path of navPaths) {
      describe(path, () => {
        it(`should land on /${path} after click`, () => {
          cy.visit('/');
          cy.get(`.nav-list`).contains(path).click();
          cy.url().should('include', `/${path}`);
        });
      });
    }
  });
});
