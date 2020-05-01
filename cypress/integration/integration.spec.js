describe("routing", () => {
  describe("/", () => {
    it("should go to the home page", () => {
      cy.visit("/");
    });
  });
});
