

var app = angular.module("instantSearch", []);




app.filter('searchFor', function(){





	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();		
		
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});


function InstantSearchController($scope){
	

	$scope.items = [
		{
			url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
			title: '50 Must-have plugins for extending Twitter Bootstrap',
			image: 'image/bootstrap.png'
		},
		{
			url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
			title: 'Making a Super Simple Registration System With PHP and MySQL',
			image: 'image/php1.png'
		},
		{
			url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
			title: 'Create a slide-out footer with this neat z-index trick',
			image: 'image/z-index1.png'
		},
		{
			url: 'http://tutorialzine.com/2013/06/digital-clock/',
			title: 'How to Make a Digital Clock with jQuery and CSS3',
			image: 'image/jquery1.png'
		},
		{
			url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
			title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
			image: 'image/smooth1.png'
		},
		{
			url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
			title: 'Mini AJAX File Upload Form',
			image: 'image/ajax1.png'
		},
		{
			url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
			title: 'Your First Backbone.js App – Service Chooser',
			image: 'image/backbone1.png'
		}
	];


}
