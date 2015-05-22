'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
		AppConstants = require('../constants/AppConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('react/lib/Object.assign'),
		CHANGE_EVENT = 'change',
		_state,
		notesStore;

/**
 * Our store object.
 * @type {{notes: Array, user: string}}
 * @private
 */

_state = {
	notes: [],
	user: ''
};

/**
 * Our setter functions.
 * @param note
 */

function setNote(note) {
	_state.notes.push(note);
}

function removeNote(note) {

	var noteToRemove = _state.notes.indexOf(note);

	_state.notes.splice(noteToRemove, 1);

}

function setUser(user) {
	_state.user = user.user;
	_state.notes = user.notes;
}

/**
 * Create our notes store
 */

notesStore = assign({}, EventEmitter.prototype, {

	/**
	 * Add our event listeners
	 */

	addChangeListener (cb) {
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener (cb) {
		this.removeListener(CHANGE_EVENT, cb);
	},

	/**
	 * Our getter (one getter for the whole state object)
	 */

	getState () {
		return _state;
	}

});

AppDispatcher.register(payload => {

	var { action } = payload;

	switch (action.actionType) {

		case AppConstants.ADD_NOTE:
			setNote(action.data);
			notesStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.REMOVE_NOTE:
			removeNote(action.data);
			notesStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.CHANGE_USER:
			setUser(action.data);
			notesStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;

	}

});

module.exports = notesStore;