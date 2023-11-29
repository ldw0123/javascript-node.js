const express = require('express'); // express 모듈 불러오기
const app = express(); // express() 함수 호출
const port = 8000;

const fs = require('fs');
const bodyParser = require('body-parser'); // body-parser
const compression = require('compression'); // compression
const indexRouter = require('./routes/index.js'); // index.js 파일을 가져옴
const topicRouter = require('./routes/topic'); // topic.js 파일을 가져옴

// ⭐️ 미들웨어: Express.js 프레임워크에서 HTTP 요청과 응답을 처리하기 위한 중간에 위치한 함수이다
// 미들웨어는 주로 app.use() 메서드를 통해 Express 애플리케이션에 추가한다.

// helmet: 보안
const helmet = require('helmet');
app.use(helmet());

// '/'으로 시작하는 주소에게 indexRouter 이름의 미들웨어를 적용한다
app.use('/', indexRouter);
// '/topic'으로 시작하는 주소들에게 topicRoutes 이름의 미들웨어를 적용한다
app.use('/topic', topicRouter);

// body-parser 미들웨어: 클라이언트에서 서버로 전송된 HTTP 요청의 body(본문. 데이터가 들어가는 부분)를 추출한다
app.use(bodyParser.urlencoded({ extended: false }));
// compression 미들웨어: 페이지 크기 압축
app.use(compression());
// 미들웨어 만들기
app.get('*', function (req, res, next) {
  // '*' : 모든 요청(req). app.get() 이기 때문에 get 방식으로 들어오는 모든 요청
  fs.readdir('./data', function (error, filelist) {
    req.list = filelist;
    next();
  });
});
// 정적 파일(static file) 미들웨어: http://localhost:8000/images/smile.jpg 경로로 입력하면 파일이 출력됨
app.use(express.static('public')); // public 디렉토리 속 파일을 정적파일로 만든다

// 404 Error 미들웨어: 미들웨어는 순차적으로 실행되기 때문에 마지막에 찾을 수 없을 때 처리하도록 맨 뒤에 둠
app.use(function (req, res, next) {
  res.status(404).send('404 NOT FOUND <br/><br/> 페이지를 찾을 수 없습니다');
});

// 에러 핸들러 Error Handler
// next(err)가 호출되면, 인자가 4개인 함수가 있는 미들웨어를 호출되면서 에러처리가 된다
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// app.listen : 포트 번호(3000)로 listen()가 실행될 때 웹서버가 실행되고, 콜백함수 안의 코드가 실행된다
// 인자 1: 포트 번호 / 인자 2: 콜백함수
app.listen(port, () => {
  console.log(`server open: ${port}`);
});
