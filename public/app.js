(function(){

  function IntroCtrl($templateCache) {
    this.user = {name: 'Blake'};
  }

  function AppCtrl($scope, $location, $routeParams, AnswerSheet, Questions) {
    $scope.answers = AnswerSheet;

    $scope.question = Questions.get($routeParams['question_index'] - 1);

    if(!$scope.question)
      $location.path("score");

    $scope.chooseAnswer = function(choice, question) {
      AnswerSheet.choose(choice, question);
      $location.path("question/" + AnswerSheet.nextQuestionIndex())
    };
  }

  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'IntroCtrl as ctrl',
      templateUrl: 'intro.html'
    }).when('/question/:question_index', {
      controller: 'AppCtrl as ctrl',
      templateUrl: 'question.html'
    }).when('/score', {
      controller: 'AppCtrl as ctrl',
      templateUrl: 'score.html'
    })
    .otherwise('/');
  })
  .controller('IntroCtrl', IntroCtrl)
  .controller('AppCtrl', AppCtrl)

  .service('AnswerSheet', AnswerSheetService)
  .service('Questions', QuestionService)

})()