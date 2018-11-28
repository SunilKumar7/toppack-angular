angular.module("toppack")
	.controller('RepositoryController', ['RepositoryService', 'PackageService', RepositoryController]);

function RepositoryController(RepositoryService, PackageService) {
	var viewModel = this;
	viewModel.fetchRepositories = fetchRepositories;
	viewModel.importPackages = importPackages;

	function fetchRepositories() {
		if (viewModel.name) {
			RepositoryService.getRepositories(viewModel.name, successCallback, errorCallback);
		} else {
			viewModel.responseData = [];
		}
		
		function successCallback(response) {
			console.log(response);
			viewModel.responseData = response.data;
		}
	
		function errorCallback() {
			// Set some error and show it in the front end. 
			console.log("Error here");
		}
	}

		function importPackages(ownerName, repositoryName) {
			// Add import logic here.
			PackageService.importPackages(ownerName, repositoryName, successCallback, errorCallback);

			function successCallback(response) {
				console.log("Updated");
				console.log(response);
//				viewModel.responseData = response.data;
			}
		
			function errorCallback() {
				console.log("Not updated");
				// Set some error and show it in the front end. 
				console.log("Error here");
			}
	
		}
	}

