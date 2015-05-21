var AppDispatcher = require('../dispatcher/AppDispatcher'),
		AppConstants = require('../constants/AppConstants'),
		githubUtils = require('../utils/GithubUtils'),
		githubActions;

githubActions = {

	getUserBio (username) {

		githubUtils
			.getBio(username)
			.then(function(res) {

				AppDispatcher.handleAction({
					actionType: AppConstants.GITHUB_USER_BIO,
					data: res.data
				});

			});

	},

	getUserRepos (username) {

		githubUtils
			.getRepos(username)
			.then(function(res) {

				AppDispatcher.handleAction({
					actionType: AppConstants.GITHUB_USER_REPOS,
					data: res.data
				});

			});

	},

	changeUser (username) {

		AppDispatcher.handleAction({
			actionType: AppConstants.CHANGE_USER,
			data: username
		});

	}

};

module.exports = githubActions;