angular.module("toppack", [])
.controller('RepositoryController', Repository);

function Repository() {
	var viewModel = this;
	viewModel.name = "Repositories";
	viewModel.b = "Top Packages";
}