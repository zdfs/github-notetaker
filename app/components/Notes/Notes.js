var React = require('react'),
		notesStore = require('../../stores/notesStore'),
		AddNote = require('./AddNote'),
		NotesList = require('./NotesList'),
		noteActions = require('../../actions/noteActions'),
		Notes;

Notes = React.createClass({

	getInitialState () {

		return {
			notes: notesStore.getState().notes
		}

	},

	componentWillReceiveProps (obj) {
		noteActions.changeUser(obj.username);
	},

	componentDidMount () {
		noteActions.changeUser(this.props.username);
		notesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount () {
		notesStore.removeChangeListener(this._onChange);
	},

	_onChange () {

		this.setState({
			notes: notesStore.getState().notes
		});

	},

	_removeNote (note) {

		noteActions.removeNote({
			user: this.props.username,
			note: note
		});

	},

	render () {

		return (
			<div>
				<h3>Notes for {this.props.username}</h3>
				<AddNote username={this.props.username} />
				<NotesList notes={this.state.notes} remove={this._removeNote} />
			</div>
		);

	}

});

module.exports = Notes;