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
			<div className="section condensed">
				<div className="row">
					<div className="columns small-12">
						<div className="row collapse">
							<div className="columns small-8">
								<input type="text" ref="note" placeholder="AddNote" onKeyDown={this.handleSubmit} />
							</div>
							<div className="columns small-4">
								<button className="button postfix" type="button" onClick={this.handleSubmit}>Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);

	}

});

module.exports = AddNote;