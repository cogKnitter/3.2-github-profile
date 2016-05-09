(function() {
  // All code NOT referencing DOM elements can go here

  var ghUserXHR = new XMLHttpRequest();
  var ghRepoXHR = new XMLHttpRequest();

  var githubUserElement = document.querySelector("[data-js='ghUser-name']");
  var githubBlogElement = document.querySelector("[data-js='ghUser-blog']");
  var githubLocationElement = document.querySelector("[data-js='ghUser-location']");
  var githubEmailElement = document.querySelector("[data-js='ghUser-email']");
  var githubAvatarElement = document.querySelector("[data-js='ghUser-avatar']");
  var githubURLElement = document.querySelector("[data-js='ghUser-url']");

  var githubRepoElement = document.querySelector("[data-js='gh-repo']");
  document.addEventListener("DOMContentLoaded", function(e){
    // ALL DOM RELATED QUERYING GOES HERE

    ghUserXHR.addEventListener("load", function(e){
      var ghUserData = JSON.parse(e.target.responseText);
      githubUserElement.innerHTML = ghUserData.name;
      githubBlogElement.innerHTML = ghUserData.blog;
      githubLocationElement.innerHTML = ghUserData.location;
      githubEmailElement.innerHTML = ghUserData.email;
      githubAvatarElement.innerHTML =  "<img src='"  +  ghUserData.avatar_url + "' />";
      githubURLElement.innerHTML = "<a href='" + ghUserData.url +  "'>" + ghUserData.url + "</a>";
    });
    ghRepoXHR.addEventListener("load", function(e){
      var reponame = JSON.parse(e.target.responseText);
      reponame.forEach(function(repo){
      githubRepoElement.innerHTML += "<a class='gh-repo__item' href='" + repo.html_url + "'>" + repo.name + "</a>";
      })
    });



  });

  ghUserXHR.open("GET", "https://api.github.com/users/cogknitter");
  ghUserXHR.send();

  ghRepoXHR.open("GET", "https://api.github.com/users/cogknitter/repos");
  ghRepoXHR.send();

}());
