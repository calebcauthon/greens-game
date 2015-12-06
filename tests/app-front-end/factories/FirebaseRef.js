describe("firebaseRef", function() {
  var factoryFn;

  beforeEach(function() {
    factoryFn = new firebaseRef();
  });

  it("has connect fn", function() {
    expect(factoryFn.connect).toBeDefined();
  });

  it("has push", function() {
    expect(factoryFn.push).toBeDefined();
  });
});