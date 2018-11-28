angular.module("toppack", ['ngRoute'])
							.config(function($routeProvider){
									$routeProvider.when("/repositories",
											{
												templateUrl: "./app/components/repository/repository.html",
											}
									)
									.otherwise({
										redirectTo: '/'
									});
							})
							.controller('TopPackBaseController', BaseController);

function BaseController() {
	var viewModel = this;
	viewModel.repository = "Repositories";
}
