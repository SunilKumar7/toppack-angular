angular.module('toppack')
			.factory('PackageService', ['$http', PackageService]);


function PackageService($http, DebounceService) {
	var services = {};
	var importPackageTimeout = null;
	services.importPackages = importPackages;

	function importPackages(ownerName, repoName, successCallback, errorCallback) {
		var data = {"ownerName": ownerName, "repoName": repoName};
		if (importPackageTimeout) {
			clearTimeout(importPackageTimeout);
		}
		function callServer() {
			$http({
				method: 'POST',
				data: JSON.stringify(data),
				url: `http://localhost:8080/import/`
			}).then(function(response) {successCallback(response)}, function() {errorCallback()});
		}
		var callServer = callServer;
		importPackageTimeout = setTimeout(callServer, 300);
	}
	return services;
}