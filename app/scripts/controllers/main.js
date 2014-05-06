'use strict';

angular.module('launch29App')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.goWhatWeDo = function (){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('what_we_do');
 
    // call $anchorScroll()
    $anchorScroll();
  };

  $scope.goContact = function (){
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash('contact');
 
    // call $anchorScroll()
    $anchorScroll();
  };



  });
