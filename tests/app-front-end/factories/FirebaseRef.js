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

    it("responds properly", function() {
      var ref = { push: function(arb) { return arb; } };
      var data = {};

      factoryFn.setConnection(ref);
      var result = factoryFn.push(data);

      result.then(function(returnedData) {
        expect(returnedData).toBe(data);
      });

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

  describe("update", function() {
    it("exists", function() {
      expect(factoryFn.update).toBeDefined();
    });

    it("responds properly", function() {
      var ref = { update: function(arb) { return arb; } };
      var data = {};

      factoryFn.setConnection(ref);
      var result = factoryFn.update(data);

      result.then(function(returnedData) {
        expect(returnedData).toBe(data);
      });

    });

    it("returns the transformed $q promise", function() {
      var ref = { update: function() {} };

      factoryFn.setConnection(ref);
      var result = factoryFn.update({});

      expect(result.then).toBeDefined();
    });

    it("sends data to ref.update", function() {
      var ref = { update: function() {} };
      spyOn(ref, 'update');

      var data = {};

      factoryFn.setConnection(ref);
      factoryFn.update(data);

      expect(ref.update).toHaveBeenCalledWith(data);
    });
  });

  describe("setConnection", function() {
    it("exists", function() {
      expect(factoryFn.setConnection).toBeDefined();
    });
  });

  describe("connect", function() {
    it("exists", function() {
      expect(factoryFn.connect).toBeDefined();
    });
  });
});