(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleControllerF);

  SimpleControllerF.$inject = ['$scope', 'UserService'];

  function SimpleControllerF($scope, UserService){
    $scope.message = 'Hey! Angular works!';

    UserService.getAllUsers()
              .then(function(response){
                console.log('Function getAllUsers: ', response);
              });

    // var userObj = {
    //   firstName: 'Fred',
    //   lastName: 'Simpson',
    //   age: 97,
    //   email: 'fred@gmail.com'
    // };
    // UserService.createUser(userObj)
    //           .then(function(response){
    //             console.log(response);
    //           });

    var userId = '57aa6783be3744110070205b';
    // var updateInfo = {
    //   firstName: 'Fred',
    //   lastName: 'Simpson',
    //   age: 79,
    //   email: 'fred@gmail.com'
    // };
    // UserService.updateUser(userId,updateInfo)
    //           .then(function(response){
    //             console.log('Function updateUser: ', response);
    //           });
    //
    // UserService.getOneUser(userId)
    //           .then(function(response){
    //             console.log('Function getOneUser: ', response);
    //           });

    // UserService.deleteUser(userId)
    //           .then(function(response){
    //             console.log('Function deleteUser: ', response);
    //           });

  };
})();
