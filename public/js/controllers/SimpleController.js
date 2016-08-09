(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleControllerF);

  SimpleControllerF.$inject = ['$scope'];

  function SimpleControllerF($scope){
    $scope.message = 'Hey! Angular works!'
  };
})();
