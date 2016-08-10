(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleControllerF);

  SimpleControllerF.$inject = ['$scope', 'UserService', 'PostService'];

  function SimpleControllerF($scope, UserService, PostService){
    $scope.message = 'Hey! Angular works!';

// This MUST change if you ever delete this userId using the deleteUser from the UserService
    var userId = '57aa6783be3744110070205b';
// This MUST change if you ever delete this postId using the deletePost from the PostService
    var postId = '57aa72b8be3744110070208e'


// This tests the getAllUsers in the UserService
    UserService.getAllUsers()
              .then(function(response){
                console.log('Function getAllUsers: ', response);
              });

// This tests the getAllPosts in the PostService
    PostService.getAllPosts()
              .then(function(response){
                console.log('Function getAllPosts: ', response);
              });

// This tests the createUser in the UserService
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

// This tests the createPost in the PostService
    // var postObj = {
    //   author: '57aa6783be3744110070205b',
    //   title: 'This is a title-test for Fred Simpson creating a post',
    //   body: 'As we make our way into life...'
    // };
    // PostService.createPost(postObj)
    //             .then(function(response){
    //               console.log('Function createPost: ', response);
    //             });

// This tests the updateUser in the UserService
    // var updateUserInfo = {
    //   firstName: 'Fred',
    //   lastName: 'Simpson',
    //   age: 54,
    //   email: 'fred@gmail.com'
    // };
    // UserService.updateUser(userId, updateUserInfo)
    //           .then(function(response){
    //             console.log('Function updateUser: ', response);
    //           });
    //
// This tests the updatePost in the PostService
    // var updatePostInfo = {
    //   title: 'This is an UPDATED title-test for Fred Simpson creating a post',
    //   body: 'As we make our way into life, we will find various...'
    // };
    // PostService.updatePost(postId, updatePostInfo)
    //             .then(function(response){
    //               console.log("Function updatePost: ",response);
    //             });

// This tests the getOneUser in the UserService
    // UserService.getOneUser(userId)
    //           .then(function(response){
    //             console.log('Function getOneUser: ', response);
    //           });

// This tests the getOnePost in the PostService


// This tests the deleteUser in the UserService
    // UserService.deleteUser(userId)
    //           .then(function(response){
    //             console.log('Function deleteUser: ', response);
    //           });

  };
})();
