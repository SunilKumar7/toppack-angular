angular.module('toppack')
			.factory('RepositoryService', ['$http',  RepositoryService]);

function RepositoryService($http) {
		var services = {};
		var fetchRepoTimeout = null;
		services.getRepositories = fetchRepositories;

		function fetchRepositories(searchValue, successCallback, errorCallback) {
			if (fetchRepoTimeout) {
				clearTimeout(fetchRepoTimeout);
			}
			var callServer = callServer;
			fetchRepoTimeout = setTimeout(callServer, 300);
			function callServer() {
				$http({
					method: 'GET',
					url: `http://localhost:8080/search?q=${searchValue}`
				}).then(function(response) {successCallback(response)}, function() {errorCallback()});
			}
		}
		return services;
}