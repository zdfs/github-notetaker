var React = require('react'),
		githubActions = require('../../actions/githubActions'),
		githubStore = require('../../stores/githubStore'),
		Middle;

Middle = React.createClass({

	getInitialState () {

		return {
			repos: githubStore.getRepos()
		};

	},

	componentWillReceiveProps (obj) {

		githubActions.getUserRepos(obj.username)

	},

	_onChange () {

		this.setState({
			repos: githubStore.getRepos()
		});

	},

	componentDidMount () {

		githubActions.getUserRepos(this.props.username);
		githubStore.addChangeListener(this._onChange);

	},

	render () {

		var repos = this.state.repos.map(function(repo, index) {

			return (
				<li className="list-group-item" key={index}>
					{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
					{repo.description && <p>{repo.description}</p>}
				</li>
			);

		});

		return (
			<div>
				<h3>User Repos</h3>
				<ul className="list-group">
					{repos}
				</ul>
			</div>
		);

	}

});

module.exports = Middle;