const fs = require("fs");
const { request } = require("http");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url == "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my first Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

// First Way
// module.exports = requestHandler;

// Second Way
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };

// Third Way
// module.exports.handler = requestHandler;
// module.exports.somText = "Some hard coded text";

// Fourth Way
exports.handler = requestHandler;
exports.somText = "Some hard coded text";
