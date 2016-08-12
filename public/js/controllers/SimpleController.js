(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleControllerF);

  SimpleControllerF.$inject = ['$scope', 'UserService', 'PostService', 'CommentService'];

  function SimpleControllerF($scope, UserService, PostService, CommentService){
    $scope.message = 'Hey! Angular works!';

// This MUST change if you ever delete this userId using the deleteUser from the UserService
    var userId = '57a92af60bdf701100b451bf';
// This MUST change if you ever delete this postId using the deletePost from the PostService
    var postId = '57abbbeecda1221100f4b4a6'


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

// This tests the getAllPosts in the PostService
    CommentService.getAllComments()
              .then(function(response){
                console.log('Function getAllComments: ', response);
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

// This tests the createComment in the CommentService
    // var commentObj = {
    //   author: '57abb218cda1221100f4b48b',
    //   body: "Why did I even have to say anything?",
    //   post: '57abbbeecda1221100f4b4a6'
    // };
    // CommentService.createComment(commentObj)
    //             .then(function(response){
    //               console.log('Function createComment: ',response);
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

// This tests the updateComment in the CommentService
    var commentId = "57ad1c8d11cad011000abc4a"
    // var updateCommentInfo = {
    //   body: "You're a troll... and this is an UPDATED comment"
    // };
    // CommentService.updateComment(commentId,updateCommentInfo)
    //             .then(function(response){
    //               console.log('Function updateComment: ',response);
    //             });

// This tests the getOneUser in the UserService
    // UserService.getOneUser(userId)
    //           .then(function(response){
    //             console.log('Function getOneUser: ', response);
    //           });

// This tests the getOnePost in the PostService
    // PostService.getOnePost(postId)
    //           .then(function(response){
    //             console.log('Function getOnePost: ',response);
    //           });

// This test the getOnePostComments in the CommentService
    CommentService.getOnePostComments(postId)
                  .then(function(response){
                    console.log('Function getOnePostComments: ',response);
                  });

// This tests the deleteUser in the UserService
    // UserService.deleteUser(userId)
    //           .then(function(response){
    //             console.log('Function deleteUser: ', response);
    //           });

// This tests the deletePost in the PostService
    // PostService.deletePost(postId)
    //           .then(function(response){
    //             console.log('Function deletePost: ',response);
    //           });

// This tests the deleteComment in the CommentService
    // CommentService.deleteComment(commentId)
    //               .then(function(response){
    //                 console.log('Function deleteComment: ',response);
    //               });


  };
})();
