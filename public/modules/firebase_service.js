function FirebaseService(firebaseRef) {
  firebaseRef.init("https://greens-game.firebaseio.com");

  this.createUser = function(user) {
    var promise = firebaseRef.push(user);
  
    promise.then(function(ref) {
      user.ref = ref;  
    });

    return promise;
  };

  this.updateUser = function(user, answers) {
    var promise = $q(function(resolve, reject) {
      user.ref.update(angular.extend({}, user, { answers: answers, ref: false }), resolve)
    });

    return promise;
  }

  return this;
}