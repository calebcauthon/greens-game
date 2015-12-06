function UserService(firebaseRef) {
  var self = {};
  var user;
  var answers;

  self.create = function(user) {
    var promise = firebaseRef.push(user);
    promise.then(function(ref) {
      user.ref = ref;
    });

    return promise;
  };

  self.update = function() {
    var userData = angular.extend({}, self.user, { answers: answers, ref: false });
    FirebaseService.updateUser(self.user, answers);
  };

  return self;
}