// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('calculator', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('keysCtrl', function($scope) {
  $scope.screenValue = "";
  $scope.bttnOne = function () {
    $scope.screenValue += "1";
  };
  $scope.bttnTwo = function () {
    $scope.screenValue += "2";
  };
  $scope.bttnThree = function () {
    $scope.screenValue += "3";
  };
  $scope.bttnFour = function () {
    $scope.screenValue += "4";
  };
  $scope.bttnFive = function () {
    $scope.screenValue += "5";
  };
  $scope.bttnSix = function () {
    $scope.screenValue += "6";
  };
  $scope.bttnSeven = function () {
    $scope.screenValue += "7";
  };
  $scope.bttnEight = function () {
    $scope.screenValue += "8";
  };
  $scope.bttnNine = function () {
    $scope.screenValue += "9";
  };
  $scope.bttnZero = function () {
    $scope.screenValue += "0";
  };
  $scope.bttnAdd = function () {
    $scope.screenValue += "+";
  };
  $scope.bttnMinus = function () {
    $scope.screenValue += "-";
  };
  $scope.bttnDivide = function () {
    $scope.screenValue += "/";
  };
  $scope.bttnMultiply = function () {
    $scope.screenValue += "*";
  };
  $scope.bttnEval = function () {
    $scope.screenValue = eval($scope.screenValue);
  };
  $scope.bttnDecimal = function () {
    $scope.screenValue += ".";
  };
  $scope.bttnClear = function () {
    $scope.screenValue = " ";
  };

}); 

