function UserService(firebaseRef) {
  var self = {};
  var user = {};
  var ref;
  var answers;

  self.set = function(attr, value) {
    user[attr] = value;
  };

  self.get = function(attr, value) {
    return user[attr];
  };

  self.create = function() {
    var promise = firebaseRef.push(user);

    promise.then(function(userRef) {
      ref = userRef;
    });

    return promise;
    /*var promise = firebaseRef.push(user);
    promise.then(function(ref) {
      ref = ref;
    });

    return promise;*/
  };

  self.update = function() {
    ref.update(user);
    /*var userData = angular.extend({}, self.user, { answers: answers, ref: false });
    FirebaseService.updateUser(self.user, answers);*/
  };

  return self;
}