const express = require('express'); // express 모듈 로드
const router = express.Router(); // express.Router() 메서드 호출
const template = require('../lib/template.js');

// app.get(app 객체의 get 메서드) : 라우트(route)
// 인자 1 : 경로(path) / 인자 2 : 콜백함수
router.get('/', function (req, res) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(req.list);
  var html = template.HTML(
    title,
    list,
    `<h2>${title}</h2>${description}`,
    `<img src="/images/smile.jpg" style="width:300px; display:block; margin:10px 0 10px 0;">`,
    `<a href="/topic/create">create</a>`
  );
  res.send(html);
});

// 현 파일이 모듈로서 동작하게 하기 위해서는 router 객체를 export해야 함
module.exports = router;
