function DefaultDbReference() {
  var url = "https://greens-game.firebaseio.com";
  return new Firebase(url);
}

function firebaseRef(firebaseAsyncToQ, DefaultDbReference) {
  var ref;
  var self = {};

  self.connect = function(url) {
    var reference = url ? new Firebase(url) : DefaultDbReference;
    self.setConnection(reference);
  };

  self.setConnection = function(firebaseReference) {
    ref = firebaseReference;
  } 

  self.update = function(data) {
    var execute = ref.update.bind(ref, data);
    return firebaseAsyncToQ(execute);
  }

  self.push = function(data) {      
    var execute = ref.push.bind(ref, data);
    return firebaseAsyncToQ(execute);
  };

  self.connect();
  return self;
}