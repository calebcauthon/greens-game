requirejs.config({
    baseUrl: '',
    paths: {
        app: '../scripts',
        angular: './scripts/lib/angular.min',
        ngRoute: './scripts/lib/angular-route.min',
        ngFire: './scripts/lib/angularfire.min',
        firebase: './scripts/lib/firebase'
    },
    shim: {
      angular: {
        exports: 'angular'
      },
      ngRoute: {
        exports: 'ngRoute',
        deps: ['angular']
      },
      ngFire: {
        exports: 'ngFire',
        deps: ['angular']
      }
    }
});

requirejs(['app/app']);