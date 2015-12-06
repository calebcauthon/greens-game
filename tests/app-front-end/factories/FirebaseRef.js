describe("firebaseRef", function() {
  var factoryFn;
  var mock_firebaseAsyncToQ = function(fn) {
    var result = fn();

    return {
      then: function(okFn, notOkFn) {
        okFn(result);
      }
    };
  };

  beforeEach(function() {
    factoryFn = new firebaseRef(mock_firebaseAsyncToQ);
  });

  describe("push", function() {
    it("exists", function() {
      expect(factoryFn.push).toBeDefined();
    });

    it("returns the transformed $q promise", function() {
      var ref = { push: function() {} };

      factoryFn.setConnection(ref);
      var result = factoryFn.push({});

      expect(result.then).toBeDefined();
    });

    it("sends data to ref.push", function() {
      var ref = { push: function() {} };
      spyOn(ref, 'push');

      var data = {};

      factoryFn.setConnection(ref);
      factoryFn.push(data);

      expect(ref.push).toHaveBeenCalledWith(data);
    });
  });

  it("has connect fn", function() {
    expect(factoryFn.connect).toBeDefined();
  });
});