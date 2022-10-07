const fs = require("fs");
const path = require("path");

//read file

//way 1
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

//way 2  better spead
// let text = fs.readFileSync("text.txt", "utf-8");
// console.log(text);

// console.log("==================");

//find folder
fs.readdir("one", (err, data) => {
  if (data) {
    data.forEach((file) => {
      console.log(path.extname(file));
      // console.log(file);
      console.log(fs.statSync("one/" + file)); // info
    });
  } else {
    console.log(err);
  }
});

//write file
fs.writeFile("newFile.txt", "this is s new text  as example", (err) => {
  if (err) console.log(err);
});
