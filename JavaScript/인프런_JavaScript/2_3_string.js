let word = '안녕하세요! 🙂';
console.log(word);
let word1 = "반갑습니다~ 👋";
console.log(word1);

let word2 = '작은따옴표 안에 "큰따옴표" 사용';
let word3 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word2, word3);

// ⚠️ 오류 발생
// let word4 = '작은따옴표 안에 '작은따옴표' 사용';
// let word5 = "큰따옴표 안에 "큰따옴표" 사용";
// console.log(word4, word5);

// ⭐️ 이스케이프 표현(escape sequence)
let word6 = '작은따옴표 안에 \'작은따옴표\' 사용';
let word7 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word6, word7);
let word8 = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
console.log(word8);

// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';
// 긴 문자열을 여러 줄에 표현
let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';
// ⚠️ 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);

// 백틱: 따옴표와 같음. 문자열 안에 탭과 줄바꿈 그대로 사용 가능
let word9 = `헬로헬로~ 🤩`;
console.log(word9);

let word10 = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(word10);

// 템플릿 리터럴
const NAME = '홍길동';
let age = 20;
let married = false;

console.log('제 이름은 ' + NAME + ', 나이는 ' + age + '세구요, ' + (married ? '기혼' : '미혼') + '입니다.');

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);    // ${}안에 상수나 변수, 표현식 등을 삽입 가능
