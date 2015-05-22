var React = require('react'),
    Home = require('./Home'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    SearchGithub = require('./SearchGithub'),
    SonosHeader = require('./common/SonosHeader'),
    Main;

Main = React.createClass({

  render () {

    return (
      <div>
        <SonosHeader />
        <SearchGithub />
        <RouteHandler />
      </div>
    );

  }

});

module.exports = Main;