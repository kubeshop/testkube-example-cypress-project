const uri = "http://34.74.127.60:8080/t/?http://34.74.127.60:8080/todos";
const newItemTitle = "Create video for conference";

describe("TODO list", () => {
  it("opens todo list", () => {
    cy.visit("https://google.pl");

    cy.get("#header h1").then((head) => {
      const headerText = Cypress.$(head).text();
      expect(headerText).to.be.eq("todos");
    });
  });
});
