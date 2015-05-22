var React = require('react'),
		NotesList;

NotesList = React.createClass({

	propTypes: {
		notes: React.PropTypes.array.isRequired,
		remove: React.PropTypes.func.isRequired
	},

	render () {

		var notes;

		if (this.props.notes) {
			notes = this.props.notes.map(function(note, index) {
				return (
					<div className="panel white" style={{position: "relative"}} key={index}>
						{note.value}
						<a style={{position: "absolute", top: 0, right: 5}} onClick={this.props.remove.bind(null, note)}>&times;</a>
					</div>
				);
			}.bind(this));
		}

		return (
			<div>
				{notes}
			</div>
		);

	}

});

module.exports = NotesList;