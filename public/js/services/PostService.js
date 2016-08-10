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
    function createPostF(userObj){
      return $http.post(baseUrl, userObj);
    };
    function getOnePostF(userId){
      return $http.get(baseUrl + userId);
    };
    function updatePostF(userId, updateInfo){
      return $http.put(baseUrl + userId, updateInfo);
    };
    function deletePostF(userId){
      return $http.delete(baseUrl + userId);
    };

  };
}());
