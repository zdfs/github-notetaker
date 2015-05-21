var AppConstants = require('../constants/AppConstants');
var axios = require('axios');

var id = "43284c837dae49c5c0ac";
var sec = "d5e1b25ba5cde921f764e229ac04faeef4ae5708";
var param = "?client_id=" + id + "&client_secret=" + sec;

var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos" + param;
    return axios.get(url);
  }
};

module.exports = githubUtils;