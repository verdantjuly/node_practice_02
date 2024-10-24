const http = require("http"); // commonjs import 방식

// req : HTTPRequest 객체
// res : HTTPResponse 객체
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain"); // client에 제공해 줄 컨텐트 데이터 타입은 text
  res.write("Hello World");
  res.end();
});

// http 80, https 443일 경우에는 생략
server.listen(4500);
