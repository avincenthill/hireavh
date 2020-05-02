describe("routing", () => {
  const paths = [
    "/",
    "/home",
    "about",
    "/resume",
    "/contact",
    "/sorting-algorithms",
    "/blog",
    "/blog/recruiter-faq",
    "/projects",
    "/graphic-design",
    "/dynamic-form",
  ];

  paths.forEach((path) => {
    describe(path, () => {
      it(`should land on ${path}`, () => {
        cy.visit(path);
      });
    });
  });
});
