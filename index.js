require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const githubData = {
  login: "BishnuMukherjee123",
  id: 118769450,
  node_id: "U_kgDOBxRHKg",
  avatar_url: "https://avatars.githubusercontent.com/u/118769450?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/BishnuMukherjee123",
  html_url: "https://github.com/BishnuMukherjee123",
  followers_url: "https://api.github.com/users/BishnuMukherjee123/followers",
  following_url:
    "https://api.github.com/users/BishnuMukherjee123/following{/other_user}",
  gists_url: "https://api.github.com/users/BishnuMukherjee123/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/BishnuMukherjee123/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/BishnuMukherjee123/subscriptions",
  organizations_url: "https://api.github.com/users/BishnuMukherjee123/orgs",
  repos_url: "https://api.github.com/users/BishnuMukherjee123/repos",
  events_url:
    "https://api.github.com/users/BishnuMukherjee123/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/BishnuMukherjee123/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Bishnu Mukherjee",
  company: null,
  blog: "",
  location: "Durgapur, Paschim Bardhaman, west Bengal",
  email: null,
  hireable: null,
  bio: "I'm currently 2nd year Computer Science & Engineering student",
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-11-21T19:38:53Z",
  updated_at: "2025-07-14T19:34:55Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("bishnumukherjee.com");
});

app.get("/login", (req, res) => {
  res.send(
    "<h1>Hello, This is the Backend first Video from chai with code</h1>"
  );
});

app.get("/github",(req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
