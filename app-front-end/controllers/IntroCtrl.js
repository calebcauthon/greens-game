function IntroCtrl($scope, $templateCache, User) {
  $scope.$watch('username', User.set.bind(User, 'username'));

  $scope.startQuiz = function() {
    User.load(User.get('username')).then(function(user) {
      User.setData(user);
    }, function() {
      User.create();  
    })
    
  };
}