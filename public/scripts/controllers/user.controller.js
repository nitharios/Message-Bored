angular.module('boredApp')
.controller('SingleUserController', ['$scope', '$routeParams', 'UsersService', 'MessagesService', function($scope, $routeParams, UsersService, MessagesService) {
  $scope.UsersService = UsersService;
  $scope.MessagesService = MessagesService;

  $scope.userMessages = [];
  $scope.user = {
    id : '',
    username : ''
  };

  UsersService.getUserByUsername($routeParams.username)
  .then(function(userDetails) {
    $scope.user.id = userDetails.id;
    $scope.user.username = userDetails.username;
  
    MessagesService.getMessagesByUser($scope.user.id)
    .then(function(userMessages) {
      $scope.userMessages = userMessages;
    });
  });
}]);