// 모듈: 기본적으로 제공하는 기능들을 그룹화해놓은 각각의 그룹

var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용하고, url을 요구한다

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // url을 분석해서 가져옴
  var title = queryData.id;
  console.log('queryData.id : ' + queryData.id); // url의 쿼리 데이터의 id값
  console.log('url : ' + _url);

  if (_url == '/') {
    title = 'welcome';
  }
  if (_url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
    // 1.html의 내용
    var template = ` 
  <!doctype html>
<html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    <ul>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ul>
    <h2>${title}</h2>
    <p>${description}</p>
  </body>
</html>  
`;
    response.end(template);
  });
});
// __dirname + url : 사용자가 접근(요청)할 때 마다 파일을 읽어들인다
console.log('__dirname + url : ' + __dirname + url);

app.listen(8000);
