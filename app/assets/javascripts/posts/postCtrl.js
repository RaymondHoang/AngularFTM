angular.module('flapperNews')
.service('post', function () { })
.controller('PostsCtrl', ['$scope','posts','post', function($scope, posts, post){
  $scope.posts = posts.posts;
  $scope.post = post;
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: []
  });
  $scope.addComment = function(){
  if($scope.body === '') { return; }
  posts.addComment(post.id, {
    body: $scope.body,
    author: 'user',
  }).success(function(comment) {
    $scope.post.comments.push(comment);
  });
  $scope.body = '';
};
  $scope.incrementUpvotes = function(comment){
  posts.upvoteComment(post, comment);
};
  
}]);