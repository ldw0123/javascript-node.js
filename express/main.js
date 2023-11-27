const express = require('express'); // express 모듈 불러오기
const app = express(); // express() 함수 호출
const port = 8000;

const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const bodyParser = require('body-parser'); // body-parser
const compression = require('compression'); // compression
const sanitizeHtml = require('sanitize-html');
const template = require('./lib/template.js');

// ⭐️ 미들웨어: Express.js 프레임워크에서 HTTP 요청과 응답을 처리하기 위한 중간에 위치한 함수이다
// 미들웨어는 app.use() 메서드를 통해 Express 애플리케이션에 추가한다.

// ⭐️ body-parser 미들웨어: 클라이언트에서 서버로 전송된 HTTP 요청의 body(본문. 데이터가 들어가는 부분)를 추출한다
app.use(bodyParser.urlencoded({ extended: false }));
// ⭐️ compression 미들웨어: 페이지 압축
app.use(compression());
// 미들웨어 만들기
app.use(function (req, res, next) {
  fs.readdir('./data', function (error, filelist) {
    req.list = filelist;
    next();
  });
});

// app.get(app 객체의 get 메서드) : 라우트(route)
// 인자 1 : 경로(path) / 인자 2 : 콜백함수
app.get('/', function (req, res) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(req.list);
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}`,
    `<a href="/create">create</a>`
  );
  res.send(html);
});

// 동적 라우팅에는 ':' 를 붙인다 /page/:pageId
app.get('/page/:pageId', function (req, res) {
  var filteredId = path.parse(req.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
    var title = req.params.pageId;
    var sanitizedTitle = sanitizeHtml(title);
    var sanitizedDescription = sanitizeHtml(description, {
      allowedTags: ['h1'],
    });
    var list = template.list(req.list);
    var html = template.HTML(
      sanitizedTitle,
      list,
      `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
      ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`
    );
    res.send(html);
  });
});

app.get('/create', function (req, res) {
  var title = 'WEB - create';
  var list = template.list(req.list);
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
  res.send(html);
});

app.post('/create_process', function (req, res) {
  var post = req.body; // body-parser
  var title = post.title;
  var description = post.description;
  fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
    res.writeHead(302, { Location: `/?id=${title}` });
    res.end();
  });
});

app.get('/update/:pageId', function (req, res) {
  var filteredId = path.parse(req.params.pageId).base;
  fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
    var title = req.params.pageId;
    var list = template.list(req.list);
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
    res.send(html);
  });
});

app.post('/update_process', function (req, res) {
  var post = req.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (error) {
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      res.redirect(`/?id=${title}`);
    });
  });
});

app.post('/delete_process', function (req, res) {
  var post = req.body;
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function (error) {
    res.redirect('/');
  });
});

// app.listen : 포트 번호(3000)로 listen()가 실행될 때 웹서버가 실행되고, 콜백함수 안의 코드가 실행된다
// 인자 1: 포트 번호 / 인자 2: 콜백함수
app.listen(port, () => {
  console.log(`server open: ${port}`);
});
