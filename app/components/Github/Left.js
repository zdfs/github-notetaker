var React = require('react'),
		githubActions = require('../../actions/githubActions'),
		githubStore = require('../../stores/githubStore'),
		Left;

Left = React.createClass({

	getInitialState () {

		return {
			user: githubStore.getUser(),
			bio: githubStore.getBio()
		};

	},

	componentWillReceiveProps (obj) {

		githubActions.changeUser(obj.username);
		githubActions.getUserBio(obj.username);

	},

	_onChange () {

		this.setState({
			user: githubStore.getUser(),
			bio: githubStore.getBio()
		});

	},

	componentDidMount () {

		githubActions.changeUser(this.props.username);
		githubActions.getUserBio(this.props.username);
		githubStore.addChangeListener(this._onChange);

	},

	componentWillUnmount () {
		githubStore.removeChangeListener(this._onChange);
	},

	render() {

		return (
			<div>
				<h3>User Profile</h3>
				<ul className="list-group">
					{this.state.bio.avatar_url && <li className="list-group-item"><img src={this.state.bio.avatar_url} className="img-rounded img-responsive" /></li>}
					{this.state.bio.name && <li className="list-group-item">Name: {this.state.bio.name}</li>}
					{this.state.bio.login && <li className="list-group-item"> Username: {this.state.bio.login} </li>}
          {this.state.bio.email && <li className="list-group-item"> Email: {this.state.bio.email} </li>}
          {this.state.bio.location && <li className="list-group-item"> Location: {this.state.bio.location} </li>}
          {this.state.bio.company && <li className="list-group-item"> Company: {this.state.bio.company} </li>}
          {this.state.bio.followers && <li className="list-group-item"> Followers: {this.state.bio.followers} </li>}
          {this.state.bio.following && <li className="list-group-item"> Following: {this.state.bio.following} </li>}
          {this.state.bio.following && <li className="list-group-item"> Public Repos: {this.state.bio.public_repos} </li>}
          {this.state.bio.blog && <li className="list-group-item"> Blog: <a href={this.state.bio.blog}> {this.state.bio.blog} </a></li>}
				</ul>
			</div>
		);

	}

});

module.exports = Left;