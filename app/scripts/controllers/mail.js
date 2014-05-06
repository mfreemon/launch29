'use strict';

angular.module('launch29App')
  .controller('MailCtrl', function ($scope, $location, $http) {
  	$scope.mail = {};

  	var defaultForm = {
              name : "",
              winery : "",
              email: "",
              phone: "",
              note:""
          };

  	$scope.sendmail = function(){
		$http.post('/api/mail', $scope.mail).success(function(data, status, headers) {
      		console.log(data);
      		$scope.form.$setPristine();
  			$scope.mail = defaultForm;
  		});
  	};
});