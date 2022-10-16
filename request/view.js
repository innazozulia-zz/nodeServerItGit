const express = require("express");
//express app
const app = express();
//registter view engine
app.set("view engine", "ejs");

//listen for requests
app.listen(3001);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "How To Set Up a GraphQL API Server in Node.js",
      snippet:
        "This article was originally written for DigitalOcean. In An Introduction to GraphQL, you learned that GraphQL is an open-source query language and runtime for APIs created to solve issues that are often experienced with traditional REST API systems.",
    },
    {
      title:
        "WebSockets and Node.js - testing WS and SockJS by building a web app",
      snippet:
        "This post will look at implementing a couple of low-level WebSockets libraries with Node.js as the WebSocket server. We’ll look at how each library is used, and why one might choose it for their project.",
    },
    {
      title: "Building a Real-Time Webapp with Node.js and Socket.io",
      snippet:
        "In this blogpost we showcase a project we recently finished for National Democratic Institute, an NGO that supports democratic institutions and practices worldwide.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Error Page" });
});
