var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용하고, url을 요구한다

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // url을 검색해서 가져옴
  console.log('queryData.id : ' + queryData.id); // url의 쿼리 데이터의 id값
  console.log('url : ' + _url);

  if (_url == '/') {
    _url = '/index.html';
  }
  if (_url == '/favicon.ico') {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  // __dirname + url : 사용자가 접근(요청)할 때 마다 파일을 읽어들인다
  console.log('__dirname + url : ' + __dirname + url);
  response.end(queryData.id);
});

app.listen(8000);
