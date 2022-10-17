const { application } = require("express");
const express = require("express");
//express app
const app = express();
//registter view engine
app.set("view engine", "ejs");
//connect mongoose for work with DB
const mongoose = require("mongoose");
//export schema for db
const Blog = require("./models/blog");

//declare connect to database mongo db
const db =
  "mongodb+srv://user:12345678qwe@nodejsblog.cnrchxj.mongodb.net/nodejsBlog?retryWrites=true&w=majority";
mongoose
  .connect(db)
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

//middleware
var morgan = require("morgan");

//listen for requests
// app.listen(3001);

//middleware for static files
app.use(express.static("public"));
//morgen middleware
app.use(morgan("dev"));

// mongoose and mongo sandbox routs
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about",
    body: "more about my new blog",
  });
  // blog.save().then((result) => {});
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// native middleware check
// app.use((req, res, next) => {
//   console.log("new request made :");
//   console.log("host: ", req.hostname);
//   console.log("path:", req.path);
//   console.log("method:", req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("in the next middleware");

//   next();
// });

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
