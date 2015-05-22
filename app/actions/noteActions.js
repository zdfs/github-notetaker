var AppDispatcher = require('../dispatcher/AppDispatcher'),
		AppConstants = require('../constants/AppConstants'),
		firebaseUtils = require('../utils/FirebaseUtils'),
		noteActions;

noteActions = {

	addNote (noteObj) {

		// Dispatch the ADD_NOTE event
		AppDispatcher.handleAction({
			actionType: AppConstants.ADD_NOTE,
			data: noteObj.note
		});

		// Add to Firebase
		firebaseUtils.addNote(noteObj);

	},

	removeNote (noteObj) {

		AppDispatcher.handleAction({
			actionType: AppConstants.REMOVE_NOTE,
			data: noteObj.note
		});

		firebaseUtils.removeNote(noteObj);

	},

	changeUser (username) {

		firebaseUtils
			.homeInstance()
			.child(username)
			.on('value', function(snapshot) {

				AppDispatcher.handleAction({
					actionType: AppConstants.CHANGE_USER,
					data: {
						user: username,
						notes: firebaseUtils.toArray(snapshot.val())
					}
				});

			});

	}

};

module.exports = noteActions;