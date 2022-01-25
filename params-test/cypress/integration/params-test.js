const uri = "http://34.74.127.60:8080/t/?http://34.74.127.60:8080/todos";
const newItemTitle = "Create video for conference";

describe("Params test", () => {
  it("should have param PARAM set to value12", () => {
    const param = Cypress.env('PARAM')
    expect(param).to.be.equal('value12')
  });

});
