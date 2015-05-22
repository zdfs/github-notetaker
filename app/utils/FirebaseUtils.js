var Firebase = require('firebase'),
		AppConstants = require('../constants/AppConstants'),
		firebaseUtils;

firebaseUtils = {

	homeInstance: function() {
		return new Firebase(AppConstants.FIREBASE_HOST);
	},

	addNote: function(noteObj) {
		this.homeInstance().child(noteObj.user).push(noteObj.note);
	},

	removeNote: function(noteObj) {
	 this.homeInstance().child(noteObj.user).child(noteObj.note.key).remove();
	},

	toArray: function(obj){

    var arr = [];

    for(var key in obj) {
    	obj[key]._key = key;
      arr.push({ key: key, value: obj[key]});
    }

    return arr;

  }

};

module.exports = firebaseUtils;