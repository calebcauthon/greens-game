function AppCtrl($scope, $location, $routeParams, AnswerSheet, Questions, User) {
  //Firebase.connect("https://greens-game.firebaseio.com");

  $scope.answers = AnswerSheet;
  $scope.user = User.user;

  var question_index = $routeParams['question_index'] - 1;

  $scope.question = Questions.get(question_index);

  if(!$scope.question)
    $location.path("score");

  $scope.chooseAnswer = function(choice_text, question) {
    AnswerSheet.choose(choice_text, question);
    Firebase.updateUser(user, AnswerSheet.getAllAnswers());

    $location.path("question/" + (2 + question_index));
  };
}