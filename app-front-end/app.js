var dependencies = [
  'require',
  './controllers/AppCtrl',
  './services/UserService',
  './services/QuestionService',
  './services/AnswerSheetService',
  './models/Question',
  './factories/FirebaseRef',
  './factories/FirebaseAsyncToQ',
  'angular',
  'ngRoute',
  'firebase',
  'ngFire'
];
define(dependencies, function () {
    (function(){
      function IntroCtrl($scope, $templateCache, User) {
        $scope.$watch('username', User.set.bind(User, 'username'));

        $scope.startQuiz = function() {
          User.create();
        };
      }

      angular.module('app', ['ngRoute', 'firebase'])
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
      .service('User', UserService)
      .service('DefaultDbReference', DefaultDbReference)

      .factory('firebaseRef', firebaseRef)
      .factory('firebaseAsyncToQ', firebaseAsyncToQ);

    })()

    angular.bootstrap(document.getElementById('app'), ['app']);
});
