const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

exports.handler = async (event) => {
  try{
    const ghres = await octokit.rest.search.repos({
      q: "sitepoint",
      sort: "stars"
    });

    const result = ghres.data.items.map(function(repo){
      return { url: repo.html_url, "stars": repo.stargazers_count };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }

  }catch(error){
    return {
      statusCode: 500,
      body: {error: error}
    }
  }
};
