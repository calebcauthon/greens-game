function firebaseAsyncToQ($q) {
  return function(async_fn) {
    return $q(function(resolve, reject) {
      var ref = async_fn(function(err) {
        if(err)
          reject(err); 
        else 
          resolve(ref);
      });
    });
  };
}