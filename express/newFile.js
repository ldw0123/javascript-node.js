const express = require('express');
const { app } = require('./main.js');

// 정적 파일(static file) 미들웨어: http://localhost:8000/images/smile.jpg 경로로 입력하면 파일이 출력됨
app.use(express.static('public')); // public 디렉토리 속 파일을 정적파일로 만든다
