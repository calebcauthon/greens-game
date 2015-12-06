function AppCtrl($scope, $location, $routeParams, AnswerSheet, Questions, User) {
  $scope.answers = AnswerSheet;
  $scope.username = User.get('username');
  
  var question_index = $routeParams['question_index'] - 1;

  $scope.question = Questions.get(question_index);

  if(!$scope.question)
    $location.path("score");

  $scope.chooseAnswer = function(choice_text, question) {
    AnswerSheet.choose(choice_text, question);
    
    User.set('answers', AnswerSheet.getAllAnswers());
    User.update();

    $location.path("question/" + (2 + question_index));
  };
}