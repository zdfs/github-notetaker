var AppDispatcher = require('../dispatcher/AppDispatcher'),
		AppConstants = require('../constants/AppConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('react/lib/Object.assign'),
		CHANGE_EVENT = 'change',
		_state,
		githubStore;

/**
 * Our store object.
 * @type {{user: string, bio: {}, repos: Array}}
 * @private
 */

_state = {
	user: '',
	bio: {},
	repos: []
};

/**
 * Our setter functions
 */

function setUser(str) {
	_state.user = str;
}

function setBio(obj) {
	_state.bio = obj;
}

function setRepos(obj) {
	_state.repos = obj;
}

/**
 * Set up our Github store.
 */

githubStore = assign({}, EventEmitter.prototype, {

	/**
	 * Our event listeners.
	 */

	addChangeListener (cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener (cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},

	/**
	 * Our getter functions
	 */

	getUser () {
		return _state.user;
	},

	getBio () {
		return _state.bio;
	},

	getRepos () {
		return _state.repos;
	}

});

/**
 * Register our AppDispatcher events.
 * @param payload
 */

AppDispatcher.register(payload => {

	var { action } = payload;

	switch (action.actionType) {

		case AppConstants.GITHUB_USER_BIO:
			setBio(action.data);
			githubStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.GITHUB_USER_REPOS:
			setRepos(action.data);
			githubStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.GITHUB_CHANGE_USER:
			setUser(action.data);
			githubStore.emit(CHANGE_EVENT);
			break;
		default:
			return true

	}

});

module.exports = githubStore;