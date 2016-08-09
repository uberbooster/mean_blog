(function(){
  angular.module('ngBlog')
         .factory('UserService', UserServiceF);

  UserServiceF.$inject = ['$http'];

  function UserServiceF($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/';
    var service = {
      getAllUsers: getAllUsersF,
      createUser: createUserF,
      getOneUser: getOneUserF,
      updateUser: updateUserF,
      deleteUser: deleteUserF
    };
    return service;

    function getAllUsersF(){
      return $http.get(baseUrl);
    };
    function createUserF(userObj){
      return $http.post(baseUrl, userObj);
    };
    function getOneUserF(userId){
      return $http.get(baseUrl + userId);
    };
    function updateUserF(userId, updateInfo){
      return $http.put(baseUrl + userId, updateInfo);
    };
    function deleteUserF(userId){
      return $http.delete(baseUrl + userId);
    };

  };
}());
