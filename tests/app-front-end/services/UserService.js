describe("UserService", function() {
  var user;
  var basic_promise;
  var basic_promise_result;

  function BasicPromise() {
    return { 
      then: function(okFn) {
        okFn(basic_promise_result);
      } 
    };
  }
  beforeEach(function() {
     user = new UserService();
     basic_promise = new BasicPromise();
     basic_promise_result = {};
  });

  describe("load", function() {
    it("passes in the username into .find", function() {
      var ref = { 
        find: function() { return basic_promise; } 
      };
      spyOn(ref, 'find');
      
      var user = new UserService(ref);
      var data = {};
      user.load(data);

      expect(ref.find).toHaveBeenCalledWith(data);
    });

    it("returns the .find promise", function() {
      var ref = { 
        find: function() { return basic_promise; } 
      };
      spyOn(ref, 'find').and.callThrough();
      var user = new UserService(ref);

      expect(user.load('user1')).toBe(basic_promise);
    });
  });

  describe("update", function() {
    it("sends user data to (ref.create)'s.update", function() {
      var returned_ref = { update: function() {} };
      spyOn(returned_ref, 'update');

      var returned_promise = { 
        then: function(okFn, notOkFn) {
          okFn(returned_ref);
        }
      };
      var ref = { push: function() { return returned_promise; } };
      
      var user = new UserService(ref);

      var breakfast = {};
      user.set('breakfast', breakfast);
      user.create();
      user.update();

      expect(returned_ref.update).toHaveBeenCalledWith({ breakfast: breakfast });
    });

    it("returns the promise", function() {
      var promise = {};
      var ref = { update: function() { return promise; } };

      basic_promise_result = ref;

      var ref = { push: function() { return basic_promise; } };
      var user = new UserService(ref);

      user.create();
      expect(user.update()).toBe(promise);
    });
  });

  describe("create", function() {
    it("sends user data to ref.update", function() {
      var ref = { 
        push: function() { return basic_promise; } 
      };
      spyOn(ref, 'push').and.callThrough();
      var user = new UserService(ref);
      var breakfast = {};

      user.set('breakfast', breakfast);
      user.create();

      expect(ref.push).toHaveBeenCalledWith({ breakfast: breakfast });
    });

    it("returns the ref promise", function() {
      var ref = { push: function() { return basic_promise; } };
      var user = new UserService(ref);

      expect(user.create()).toBe(basic_promise);      
    });
  });
});