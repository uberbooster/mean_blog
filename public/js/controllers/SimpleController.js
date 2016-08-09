(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleControllerF);

  SimpleControllerF.$inject = ['$scope', 'UserService'];

  function SimpleControllerF($scope, UserService){
    $scope.message = 'Hey! Angular works!';

    UserService.getAllUsers()
              .then(function(response){
                console.log(response);
              });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'lilfunnyman@jon.com'
    };
    UserService.createUser(userObj)
              .then(function(response){
                console.log(response);
              });
    
  };
})();
