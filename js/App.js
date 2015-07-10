var appMainModule = angular.module('appMain', []);

appMainModule.controller("homePageViewModel", function ($scope, $http, $location) {

	$scope.sortType     = 'cName'; 
	$scope.sortReverse  = false;  
	$scope.searchCompanies   = ''; 

	$scope.headingCaption = 'Customer experience';

	$scope.companies = [
		{ cName: '21st Century Fox', sent: 'Yes', timeSpent: "1:56:20", calcResults: "Yes", trialCreated: "4", otherUsers: "6", lastSeen: "4/15/15", engagement: "50" },
		{ cName: 'Volvo', sent: 'Yes', timeSpent: "1:11:10", calcResults: "Yes", trialCreated: "3", otherUsers: "9", lastSeen: "1/19/15", engagement: "43" },
		{ cName: 'Indigo Slate', sent: 'Yes', timeSpent: "13:42", calcResults: "Yes", trialCreated: "3", otherUsers: "3", lastSeen: "2/11/15", engagement: "11" },
		{ cName: 'Boeing', sent: 'Yes', timeSpent: "21:55", calcResults: "No", trialCreated: "1", otherUsers: "2", lastSeen: "7/1/15", engagement: "55" },
		{ cName: 'Pyramid', sent: 'No', timeSpent: "-", calcResults: "-", trialCreated: "-", otherUsers: "-", lastSeen: "-", engagement: "50" },
	];

	$scope.showCompanies = function (company) {
		alert('You selected ' + company.cName + '.')
	}
	
});