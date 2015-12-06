function UserService(firebaseRef) {
  var self = {};
  var user = {};
  var ref;
  var answers;

  self.set = function(attr, value) {
    user[attr] = value;
  };

  self.setData = function(obj) {
    angular.extend(user, obj);
  }

  self.get = function(attr, value) {
    return user[attr];
  };

  self.load = function(username) {
    return firebaseRef.find(username);
  };

  self.create = function() {
    var promise = firebaseRef.push(user);

    promise.then(function(userRef) {
      ref = userRef;
    });

    return promise;
  };

  self.update = function() {
    return ref.update(user);
  };

  return self;
}