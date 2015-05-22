var React = require('react'),
    Router = require('react-router'),
    SearchGithub;

SearchGithub = React.createClass({

  mixins: [Router.Navigation],

  handleSubmit: function () {

    var username = this.refs.username.getDOMNode().value;

    this.refs.username.getDOMNode().value = '';

    this.transitionTo('profile', {username: username});

  },

  render: function () {

    return (
      <div className="section condensed slate">
        <div className="row">
          <div className="columns small-12">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="columns small-12">
                  <div className="row collapse">
                    <div className="columns small-10">
                      <input type="text" ref="username" placeholder="Search for a Github username" style={{marginBottom: 0}} />
                    </div>
                    <div className="columns small-2">
                      <button type="submit" className="button postfix" style={{marginBottom: 0}}>Go</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = SearchGithub;