angular
  .module("usPresidents", ["ui.router", "ngResource"])
  .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", Router])
  .factory("President", ["$resource", President])
  .controller("indexCtrl", ["$state", "President", indexController])
  .controller("showCtrl", ["$state", "$stateParams", "President", showController])

  function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "/assets/js/ng-views/index.html",
        controller: "indexCtrl",
        controllerAs: "vm"
      })
      .state("show", {
        url: "/:name",
        templateUrl: "/assets/js/ng-views/show.html",
        controller: "showCtrl",
        controllerAs: "vm"
      })
    $urlRouterProvider.otherwise("/")
  }

  function President ($resource) {
    return $resource("/api/presidents/:name", {}, {
      update: { method: "PUT" }
    });
  }

  function indexController ($state, President) {

  }

  function showController ($state, $stateParams, President) {

  }
