var GitHubApi = require('github');
var github = new GitHubApi();


exports.handler = (event, context, callback) => {

  github.search.repos({
    q: "sitepoint",
    sort: "stars"
  }, function(err, res){
    if(err){
      callback(err);
    }

    var results = res.items.map(function(repo){
      return { url: repo.html_url, "stars": repo.stargazers_count };
    });

    callback(null, JSON.stringify(results));
  });

};


