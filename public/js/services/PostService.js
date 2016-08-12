(function(){
  angular.module('ngBlog')
         .factory('PostService', PostServiceF);

  PostServiceF.$inject = ['$http'];

  function PostServiceF($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/posts/';
    var service = {
      getAllPosts: getAllPostsF,
      createPost: createPostF,
      getOnePost: getOnePostF,
      updatePost: updatePostF,
      deletePost: deletePostF
    };
    return service;

    function getAllPostsF(){
      return $http.get(baseUrl);
    };
    function createPostF(postObj){
      return $http.post(baseUrl, postObj);
    };
    function getOnePostF(postId){
      return $http.get(baseUrl + postId);
    };
    function updatePostF(postId, updatePostInfo){
      return $http.put(baseUrl + postId, updatePostInfo);
    };
    function deletePostF(postId){
      return $http.delete(baseUrl + postId);
    };

  };
}());
