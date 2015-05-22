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
				<li key={index} style={{borderBottom: '1px solid #DDD', marginBottom: 10}}>
					{repo.html_url && <h5 style={{marginTop: 10}}><a href={repo.html_url} target="_blank">{repo.name}</a></h5>}
					{repo.description && <p>{repo.description}</p>}
				</li>
			);

		});

		var repoList =
				<ul className="no-bullet">
					{repos}
				</ul> ;

		var emptyList =
				<p>There are no repositories available</p> ;

		return (
			<div>
				<div className="row">
					<div className="columns small-12">
						<h3>User Repos</h3>
					</div>
				</div>
				<div className="section condensed">
					{this.state.repos.length ? repoList : emptyList}
				</div>
			</div>
		);

	}

});

module.exports = Middle;