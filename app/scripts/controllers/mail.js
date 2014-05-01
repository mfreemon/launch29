'use strict';

angular.module('launch29App')
  .controller('MailCtrl', function ($scope, $location, $http) {
  	$scope.mail = {};

  	$scope.sendmail = function(){
  		$http.post('/api/mail', $scope.mail).success(function(data, status, headers) {
      		console.log(data);
  		});
  	};
});