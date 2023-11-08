// 모듈: 기본적으로 제공하는 기능들을 그룹화해놓은 각각의 그룹

var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용하고, url을 요구한다
var qs = require('querystring');

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
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = '<ul>';
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i += 1;
  }
  list = list + '</ul>';
  return list;
}

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // url의 쿼리 스트링을 분석(파싱)해서 가져옴
  var pathname = url.parse(_url, true).pathname; // url 경로 부분을 파싱해서 가져옴
  // pathname(url의 경로 부분)이 / 이면
  if (pathname === '/') {
    // 쿼리 스트링의 id값이 정의되지 않으면 (홈페이지 구현)
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        // filelist : data 디렉토리의 파일의 리스트
        var list = templateList(filelist);
        // 1.html의 내용
        var template = templateHTML(
          title,
          list,
          `<h2>${title}</h2>${description}`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      // id 값이 있으면
      fs.readdir('./data', function (error, filelist) {
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
              `<h2>${title}</h2>${description}`
            );
            response.writeHead(200);
            response.end(template);
          }
        );
      });
    }
    // pathname이 /create 이면
  } else if (pathname === '/create') {
    fs.readdir('./data', function (error, filelist) {
      var title = 'WEB - create';
      var list = templateList(filelist);
      // 1.html의 내용
      var template = templateHTML(
        title,
        list,
        `
          <form action="http://localhost:8000/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `
      );
      response.writeHead(200);
      response.end(template);
    });
    // pathname이 /create_process 이면
  } else if (pathname === '/create_process') {
    // POST 방식으로 전송된 데이터를 가져오기 (이벤트)
    var body = '';
    request.on('data', function (data) {
      // data 인자 : 데이터를 조각조각 수신
      body = body + data;
    });
    request.on('end', function () {
      // end 인자 : 정보 수신이 끝남. 마지막 데이터를 수신
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      // fs.writeFile() : 파일 생성
      fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
        response.writeHead(302, { location: `/?id=${title}` }); // 302 : 페이지를 redirection 시키라는 의미 cf) 200 : 성공했다는 의미
        response.end(); // 성공적으로 끝났으면 response.end();
      });
      console.log(post.title);
    });
  } else {
    // 페이지를 찾을 수 없으면
    response.writeHead(404);
    response.end('404 Not found');
  }
});

app.listen(8000);
