angular.module("toppack", ['ngRoute'])
							.config(function($routeProvider){
									$routeProvider.when("/repositories",
											{
													templateUrl: "./app/components/repository/repository.html",
													controller: "RepositoryController"
											}
									);
							})
							.controller('TopPackBaseController', BaseController);

function BaseController() {
	var viewModel = this;
	viewModel.a = "Repositories";
	viewModel.b = "Top Packages";
	
}
