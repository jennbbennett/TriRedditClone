var app = angular.module("triRedditApp", ['ngAnimate']);

app.controller("triRedditController", function($scope) {


  $scope.view = {};
  $scope.view.searchInput = '';
  $scope.view.filterTerms = ['votes', 'author', 'title', 'date'];
  $scope.view.currentFilter = "author";
  $scope.view.displayFilter = "";


  $scope.view.posts = [{
    title: "My Way or the Tri Way",
    author: "Nicky Kulish",
    image: "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-frc3/v/t1.0-9/1011532_419094131535228_1715574938_n.jpg?oh=d6f93dd80c9a28f46f32ee0e766cfdd5&oe=57444B23",
    description: "Tough race, beautiful venue.  While it can be really tempting to change the race order to take on your comfort zones first, think twice before putting your swim last!  Transition was a little crazy with all exits being used throughout the race, but it was a great atmosphere with terrific volunteers and swag.",
    date: moment().subtract(5, 'days').toDate(),
    votes: 5,
    comments: [{
      author: "Sarah",
      text: "I second this race as a fun choice!"
    }, {
      author: "Jenn",
      text: "Great venue, but the bike is tougher than it looks."
    }],
    addCommentShow: false,
    commentsShow: false
  }, {
    title: "Outdoor Divas",
    author: "Jenn Bennett",
    image: "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xta1/t31.0-8/11032490_10153458250023903_6679132937871622511_o.jpg",
    description: "Loved this race as a first-timer and would suggest to others.  All female racers makes for a supportive atmosphere, though there are elite racers in the field.  Very flat and fast course.  Very well staffed, though there was not a lot of bike support this year.  The Firefighters of CO pinup models man the water stations on the run :)",
    date: moment().subtract(3, 'days').toDate(),
    votes: 6,
    comments: [{
      author: "Olivia",
      text: "Won my age group this year and 3rd overall - I'll be back!"
    }],
    addCommentShow: false,
    commentsShow: false
  }, {
    title: "Moab Triathlon Festival",
    author: "Tara Vargish",
    image: "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xaf1/v/t1.0-9/427022_10151067296638903_144810061_n.jpg?oh=f2fa6a2b1aef5133edb5e36378cb59dd&oe=573BC8FE",
    description: "Moab in June is hotter than the surface of the sun!  Bear this in mind!  Camped nearby and had a blast in the area, but the road race was tough - lots of cattleguards on the bike, deceptive climbs, trail run.  Watch out for a long, rocky run out the swim on Ken's Lake and bring throwaway foot gear.",
    date: moment().subtract(1, 'day').toDate(),
    votes: 8,
    comments: [{
      author: "Rob",
      text: "Small race, chances to podium if you can take the heat!"
    }, {
      author: "Michael",
      text: "Lots of race options including xTerra."
    }, {
      author: "Meghann",
      text: "There is a kids tri as well - fun for everyone! Book campsites well in advance."
    }],
    addCommentShow: false,
    commentsShow: false
  }];

  $scope.view.addPostShow = false;

  $scope.addPost = {};


  $scope.addNewPost = function(post) {
    $scope.view.posts.push(post);
    post.votes = 0;
    post.date = new Date();
    post.comments = [];
    post.commentsShow = false;
    post.addCommentShow = false;
    $scope.view.addPostShow = false;
    $scope.addPost = {};
    $scope.addPostForm.$setPristine();
  };

  $scope.toggleAddPostShow = function() {
    $scope.view.addPostShow = !$scope.view.addPostShow;
  };

  $scope.addComment = {};

  $scope.addNewComment = function(post, newComment) {
    post.comments.push(angular.copy(newComment));
    post.addCommentShow = false;
    $scope.addComment = {};
  };

  $scope.toggleAddCommmentShow = function(post) {
    $scope.view.posts.forEach(function(nextPost) {
      if (nextPost !== post) {
        nextPost.addCommentShow = false;
      } else {
        nextPost.addCommentShow = !nextPost.addCommentShow;
      }
    });
    $scope.newComment = {};
  };

  $scope.toggleCommmentsShow = function(post) {
    post.commentsShow = !post.commentsShow;
  };

  $scope.setFilter = function(filter) {
    $scope.view.currentFilter = filter;
    if (filter === "title" | filter === "author") {
      $scope.view.currentFilter = filter;
    } else {
      $scope.view.currentFilter = '-' + filter;
    }
  };

  $scope.formatDate = function(date) {
    return moment(date).calendar();
  };

});
