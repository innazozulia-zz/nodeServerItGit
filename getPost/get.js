// get получить
const http = require("http");
const url = require("url");
const { parse } = require("querystring");

http
  .createServer((request, response) => {
    console.log(request.method); // !!!!!

    // GET
    if (request.method === "GET") {
      let urlRequest = url.parse(request.url, true);
      // console.log(urlRequest);

      // console.log(urlRequest.query.test);  in url http://localhost:2001?test=4
      // console.log(urlRequest.query.test); // 4

      console.log("done");
      response.end("server work!");
      if (urlRequest.query.test % 2 == 0) {
        console.log("even");
      } else {
        console.log("odd");
      }
    } else {
      // POST

      let body = "";
      request.on("data", (chunk) => {
        body += chunk.toString();
      });
      request.on("end", () => {
        let params = parse(body);
        console.log(params);
        console.log(params.body);
        // console.log(body);
        response.end(" OK ");
      });
    }
  })
  .listen(2001);
