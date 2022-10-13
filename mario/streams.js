const fs = require("fs");

//read
const readStream = fs.createReadStream("./articles/header.txt", {
  encoding: "utf-8",
});
// readStream.on("data", (chunk) => {
//   console.log("---------- new chunk ----------");
//   console.log(chunk);
//   writeStream.write("\n NEW CHUNK\n");
//   writeStream.write(chunk);
// });

//write
const writeStream = fs.createWriteStream("./articles/footer.txt");

//piping
readStream.pipe(writeStream);
