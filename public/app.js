(function(){

  function IntroCtrl($templateCache) {
    this.user = {name: 'Blake'};
  }

  function AppCtrl($scope, AnswerSheet) {
    $scope.chooseRightAnswer = function() { AnswerSheet.chooseRightAnswer(); };
    $scope.chooseWrongAnswer = function() { AnswerSheet.chooseWrongAnswer(); };

    $scope.rightAnswersTally = function() { return AnswerSheet.rightAnswersTally; };
    $scope.wrongAnswersTally = function() { return AnswerSheet.wrongAnswersTally; };
  }

  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'IntroCtrl as ctrl',
      templateUrl: 'intro.html'
    }).when('/question1', {
      controller: 'AppCtrl as ctrl',
      templateUrl: 'question1.html'
    }).when('/question2', {
      controller: 'AppCtrl as ctrl',
      templateUrl: 'question2.html'
    }).when('/score', {
      controller: 'AppCtrl as ctrl',
      templateUrl: 'score.html'
    })
    .otherwise('/');
  })
  .controller('IntroCtrl', IntroCtrl)
  .controller('AppCtrl', AppCtrl)

  .service('AnswerSheet', AnswerSheetService)

})()