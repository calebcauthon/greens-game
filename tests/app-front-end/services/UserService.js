describe("UserService", function() {
  var user;

  beforeEach(function() {
     user = UserService();
  });

  describe("create", function() {
    it("sends user data to ref.push", function() {
      var ref = { push: function() {} };
      spyOn(ref, 'push');
      var user = new UserService(ref);
      var breakfast = {};

      user.set('breakfast', breakfast);
      user.create();

      expect(ref.push).toHaveBeenCalledWith({ breakfast: breakfast });
    });

    it("returns the ref promise", function() {
      var result = {};
      var ref = { push: function() { return result; } };
      var user = new UserService(ref);

      expect(user.create()).toBe(result);

      
    });
  });
});