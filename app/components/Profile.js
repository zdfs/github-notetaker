var React = require('react'),
    Router = require('react-router'),
    notesStore = require('../stores/notesStore'),
    Left = require('../components/Github/Left'),
    Middle = require('../components/Github/Middle'),
    Notes = require('../components/Notes/Notes'),
    Profile;

Profile = React.createClass({

  mixins: [ Router.State ],

  render: function(){

    var username = this.getParams().username;

    return (
      <div className="section condensed">
        <div className="row">
          <div className="columns small-12 medium-4">
            <Left username={username}/>
          </div>
          <div className="columns small-12 medium-4">
            <Middle username={username}/>
          </div>
          <div className="columns small-12 medium-4">
            <Notes username={username}/>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = Profile;