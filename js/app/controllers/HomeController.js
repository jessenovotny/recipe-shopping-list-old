function HomeController(){
  var home = this;
  home.hello = "Hello";
}

angular
  .module('app')
  .controller('HomeController', HomeController);