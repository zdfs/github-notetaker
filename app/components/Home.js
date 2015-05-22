var React = require('react'),
		githubActions = require('../actions/githubActions'),
		SearchGithub = require('./SearchGithub'),
		Home;

Home = React.createClass({

	render: function() {

		return (
			<div>
				<h2 className="text-center">Search by Github Username Above</h2>
			</div>
		);

	}

});

module.exports = Home;