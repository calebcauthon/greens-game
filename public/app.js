(function(){

  function IntroCtrl($templateCache) {
    this.user = {name: 'Blake'};
  }

  angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/', {
      controller: 'IntroCtrl as ctrl',
      templateUrl: 'intro.html'
    }).when('/question1', {
      controller: function() {},
      templateUrl: 'question1.html'
    }).when('/question2', {
      controller: function() {},
      templateUrl: 'question2.html'
    }).when('/score', {
      controller: function() {},
      templateUrl: 'score.html'
    })
    .otherwise('/');
  })
  .controller('IntroCtrl', IntroCtrl)

})()