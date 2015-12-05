(function(){

  function IntroCtrl($templateCache) {
    this.user = {name: 'Blake'};
  }

  function AppCtrl($scope, AnswerSheet) {
    $scope.answers = AnswerSheet;
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