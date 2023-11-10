// 모듈: 기본적으로 제공하는 기능들을 그룹화해놓은 각각의 그룹

var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 사용하고, url을 요구한다
var qs = require('querystring');

// refactoring 리팩토링
var template = {
  HTML: function (title, list, body, control) {
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
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (filelist) {
    var list = '<ul>';
    var i = 0;
    while (i < filelist.length) {
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i += 1;
    }
    list = list + '</ul>';
    return list;
  },
};

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

        /*
        var list = templateList(filelist);
        var template = templateHTML(
          title,
          list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(template);   
        */

        // filelist : data 디렉토리의 파일의 리스트
        var list = template.list(filelist);
        // 1.html의 내용
        var html = template.HTML(
          title,
          list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      // id 값이 있으면
      fs.readdir('./data', function (error, filelist) {
        fs.readFile(
          `data/${queryData.id}`,
          'utf8',
          function (err, description) {
            var title = queryData.id;
            var list = template.list(filelist);
            // 1.html의 내용
            var html = template.HTML(
              title,
              list,
              `<h2>${title}</h2>${description}`,
              `<a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}" />
                <input type="submit" value="delete" />
              </form>`
            );
            response.writeHead(200);
            response.end(html);
          }
        );
      });
    }
    // pathname이 /create 이면
  } else if (pathname === '/create') {
    fs.readdir('./data', function (error, filelist) {
      var title = 'WEB - create';
      var list = template.list(filelist);
      // 1.html의 내용
      var html = template.HTML(
        title,
        list,
        `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `,
        ''
      );
      response.writeHead(200);
      response.end(htmnl);
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
        // response.writeHead(302, { location: 주소 위치 } : 페이지를 redirection 시키라는 의미 cf) 200 : 성공했다는 의미
        response.writeHead(302, { location: `/?id=${title}` });
        response.end(); // 성공적으로 끝났으면 response.end();
      });
      console.log(post.title);
    });
    // path가 '/update' 이면
  } else if (pathname === '/update') {
    fs.readdir('./data', function (error, filelist) {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        var title = queryData.id;
        var list = template.list(filelist);
        // 1.html의 내용
        var html = template.HTML(
          title,
          list,
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
    // path가 '/update_process' 이면
  } else if (pathname === '/update_process') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      // fs.rename() : 파일의 이름을 다시 새로 만든다
      fs.rename(`data/${id}`, `data/${title}`, function (error) {
        // 파일의 내용 수정
        fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
          response.writeHead(302, { location: `/?id=${title}` });
          response.end();
        });
      });
    });
    // path가 '/delete_process' 이면
  } else if (pathname === '/delete_process') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      var id = post.id;
      // fs.unlink() 파일 삭제
      fs.unlink(`data/${id}`, function (error) {
        response.writeHead(302, { location: `/` });
        response.end();
      });
    });
  } else {
    // 페이지를 찾을 수 없으면
    response.writeHead(404);
    response.end('404 Not found');
  }
});

app.listen(8000);
