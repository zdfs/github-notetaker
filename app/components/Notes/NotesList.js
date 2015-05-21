var React = require('react'),
		NotesList;

NotesList = React.createClass({

	render () {

		var notes;

		if (this.props.notes) {
			notes = this.props.notes.map(function(note, index) {
				return <li className="list-group-item" key={index}>{note}</li>
			});
		}

		return (
			<ul className="list-group">
				{notes}
			</ul>
		);

	}

});

module.exports = NotesList;