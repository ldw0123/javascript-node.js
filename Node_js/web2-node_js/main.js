// 모듈: 기본적으로 제공하는 기능들을 그룹화해놓은 각각의 그룹

var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용하고, url을 요구한다

function templateHTML(title, list, body) {
  return ` 
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>  
`;
}

function templateList(filelist) {
  var list = `<ul>`;
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href='/?id=${filelist[i]}'>${filelist[i]}</a></li>`;
    i += 1;
  }
  list = list + `</ul>`;
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // url을 분석해서 가져옴
  var pathname = url.parse(_url, true).pathname;

  console.log('queryData.id : ' + queryData.id); // url의 쿼리 데이터의 id값
  console.log('url : ' + _url);

  if (pathname === '/') {
    // 쿼리 데이터의 id값이 정의되지 않으면 (홈페이지 구현)
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        console.log(filelist); // filelist 출력
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        // filelist : data 디렉토리의 파일의 리스트
        var list = templateList(filelist);
        // 1.html의 내용
        var template = templateHTML(
          title,
          list,
          `<h2>${title}</h2> <p>${description}</p>`
        );
        console.log(template);
        response.writeHead(200);
        response.end(template);
      });
    } else {
      // id 값이 있으면
      fs.readdir('./data', function (error, filelist) {
        console.log(filelist); // filelist 출력
        fs.readFile(
          `data/${queryData.id}`,
          'utf8',
          function (err, description) {
            var title = queryData.id;
            var list = templateList(filelist);
            // 1.html의 내용
            var template = templateHTML(
              title,
              list,
              `<h2>${title}</h2> <p>${description}</p>`
            );
            response.end(template);
            response.writeHead(200);
          }
        );
      });
    }
  } else {
    // 페이지를 찾을 수 없으면
    response.writeHead(404);
    response.end('404 Not found');
  }
});
// __dirname + url : 사용자가 접근(요청)할 때 마다 파일을 읽어들인다
console.log('__dirname + url : ' + __dirname + url);

app.listen(8000);
