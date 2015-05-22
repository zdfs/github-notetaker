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
				<div className="row">
					<div className="columns small-12">
						<h3>User Profile</h3>
					</div>
				</div>
				<div className="section condensed">
					{this.state.bio.avatar_url && <a href={this.state.bio.html_url} target="_blank"><img src={this.state.bio.avatar_url} className="th radius" /></a>}
					<ul className="side-nav">
						{this.state.bio.name && <li><b>Name:</b> {this.state.bio.name}</li>}
						{this.state.bio.login && <li><b>Username:</b><a href={this.state.bio.html_url} target="_blank" style={{display: "inline", padding: "0 .25rem"}}>{this.state.bio.login}</a></li>}
						{this.state.bio.email && <li><b>Email:</b> {this.state.bio.email}</li>}
						{this.state.bio.location && <li><b>Location:</b> {this.state.bio.location}</li>}
						{this.state.bio.company && <li><b>Company:</b> {this.state.bio.company}</li>}
						{this.state.bio.followers > 0 && <li><b>Followers:</b> {this.state.bio.followers}</li>}
						{this.state.bio.following > 0 && <li><b>Following:</b> {this.state.bio.following}</li>}
						{this.state.bio.public_repos > 0 && <li><b>Public Repos:</b> {this.state.bio.public_repos}</li>}
						{this.state.bio.blog && <li><b>Blog:</b><a style={{display: "inline", padding: "0 .25rem"}} href={this.state.bio.blog} targe="_blank">{this.state.bio.blog}</a></li>}
					</ul>
				</div>
			</div>
		);

	}

});

module.exports = Left;