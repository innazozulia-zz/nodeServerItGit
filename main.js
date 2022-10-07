// csc and json

let fs = require("fs");
let path = require("path");
let studens = require("./one");
// read csv
let csv = require("csv-parser");
// write csv
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// fs.writeFile("one.txt", "Nodejs users", (err) => {
//   if (err) console.log("Error!");
// });

// write json file
const person = {
  Inna: {
    name: "Inna",
    age: "31",
    department: "Frontend dev",
    car: "tesla",
  },
  Anton: {
    name: "Anton",
    age: "34",
    department: "backend dev",
    car: "bmw",
  },
};

// fs.writeFile("one.json", JSON.stringify(person), (err) => {
//   if (err) console.log("err");
// });

// read JSON

// console.log(studens);

//read csv  coma sepatate value

// npm i csv-parser
const result = [];

// fs.createReadStream("table.csv")
//   .pipe(csv())
//   .on("data", (data) => result.push(data))
//   .on("end", () => {
//     console.log(result);
//   });

//write csv files
const csvWriter = createCsvWriter({
  path: "test.csv",
  header: [
    { id: "name", title: "NAME" },
    { id: "surname", title: "Last Name" },
    { id: "age", title: "Age" },
    { id: "gender", title: "Gender" },
  ],
});

const data = [
  {
    name: "Polly",
    surname: "Smith",
    age: 28,
    gender: "F",
  },
  {
    name: "Pete",
    surname: "Black",
    age: 35,
    gender: "M",
  },
  {
    name: "Lesly",
    surname: "Mikerry",
    age: 33,
    gender: "M",
  },
  {
    name: "Linda",
    surname: "Hummilcton",
    age: 30,
    gender: "F",
  },
];

csvWriter.writeRecords(data).then(() => {
  console.log("...done");
});
