angular.module('flapperNews')
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: []
  });
  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };  
}]);