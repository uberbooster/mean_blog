(function(){
  angular.module('ngBlog')
         .factory('CommentService', CommentServiceF);

  CommentServiceF.$inject = ['$http'];

  function CommentServiceF($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/comments/';
    var service = {
      getAllComments: getAllCommentsF,
      createComment: createCommentF,
      getOnePostComments: getOnePostCommentsF,
      updateComment: updateCommentF,
      deleteComment: deleteCommentF
    };
    return service;

    function getAllCommentsF(){
      return $http.get(baseUrl);
    };
    function createCommentF(commentObj){
      return $http.post(baseUrl, commentObj);
    };
    function getOnePostCommentsF(postId){
      return $http.get(baseUrl + postId);
    };
    function updateCommentF(commentId, updateCommentInfo){
      return $http.put(baseUrl + commentId, updateCommentInfo);
    };
    function deleteCommentF(commentId){
      return $http.delete(baseUrl + commentId);
    };

  };
}());
