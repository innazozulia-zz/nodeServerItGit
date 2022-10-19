const { application } = require("express");
const express = require("express");
//express app
const app = express();
//registter view engine
app.set("view engine", "ejs");
//connect mongoose for work with DB
const mongoose = require("mongoose");
//export schema for db
// const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");

//declare connect to database mongo db
const db =
  "mongodb+srv://inna:test12345@nodejsblog.9lx65fm.mongodb.net/blog?retryWrites=true&w=majority";
mongoose
  .connect(db)
  // .then((result) => console.log("connected to db"))
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

//middleware
var morgan = require("morgan");

//listen for requests
// app.listen(3001);

//middleware for static files
app.use(express.static("public"));
//middleware for post metod (current data) undefined !!!!
app.use(express.urlencoded({ extended: true }));
//morgan middleware
app.use(morgan("dev"));

//manual adding data to db
// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 542",
//     snippet: "about this blog Node js",
//     body: "more about my new blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// see all blogs
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//see single blog by ID
// app.get("/single-blog", (req, res) => {
//   Blog.findById("634e8a8676c22ac5d5bfe834")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

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

//main routing
app.get("/", (req, res) => {
  res.redirect("/blogs");
  // const blogs = [
  //   {
  //     title: "How To Set Up a GraphQL API Server in Node.js",
  //     snippet:
  //       "This article was originally written for DigitalOcean. In An Introduction to GraphQL, you learned that GraphQL is an open-source query language and runtime for APIs created to solve issues that are often experienced with traditional REST API systems.",
  //   },
  //   {
  //     title:
  //       "WebSockets and Node.js - testing WS and SockJS by building a web app",
  //     snippet:
  //       "This post will look at implementing a couple of low-level WebSockets libraries with Node.js as the WebSocket server. We’ll look at how each library is used, and why one might choose it for their project.",
  //   },
  //   {
  //     title: "Building a Real-Time Webapp with Node.js and Socket.io",
  //     snippet:
  //       "In this blogpost we showcase a project we recently finished for National Democratic Institute, an NGO that supports democratic institutions and practices worldwide.",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//routing blogs
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Error Page" });
});
