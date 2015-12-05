function FirebaseService(firebaseRef) {
  firebaseRef.init("https://greens-game.firebaseio.com");

  function attachRef(ref) {
    this.ref = ref;
  }
  
  this.createUser = function(user) {
    var promise = firebaseRef.push(user);
    promise.then(attachRef.bind(user));

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