const fs = require("fs");

//reading  files
// fs.readFile("./blog/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log("last files");

//writing files
// fs.writeFile("./blog/blog.txt", "hello dev", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file was written");
// });
// fs.writeFile("./blog/blog2.txt", "hello again", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file was written");
// });

// directories (add and delete folder)
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder was added");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(console.err);
//     }
//     console.log("folder deleted");
//   });
// }

//deleting files
if (fs.existsSync("./blog/blog2.txt")) {
  fs.unlink("./blog/blog2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
