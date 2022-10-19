const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogController.blog_index);

// add data to DB and page
router.post("/", blogController.blog_create_post);
//create
router.get("/create", blogController.blog_create_get);
// details from id
router.get("/:id", blogController.blog_details);
//delete post
router.delete("/:id", blogController.blog_delete_post);

module.exports = router;
