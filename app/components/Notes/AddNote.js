var React = require('react'),
		noteActions = require('../../actions/noteActions'),
		AddNote;

AddNote = React.createClass({

	handleSubmit (e) {

		if (e.type === 'click' || e.keyCode === 13) {

			e.stopPropagation();

			noteActions.addNote({
				user: this.props.username,
				note: this.refs.note.getDOMNode().value
			});

			this.refs.note.getDOMNode().value = '';

		}

	},

	render () {

		return (
			<div className="input-group cushion">
				<input type="text" ref="note" className="form-control" placeholder="AddNote" onKeyDown={this.handleSubmit} />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
				</span>
			</div>
		);

	}

});

module.exports = AddNote;