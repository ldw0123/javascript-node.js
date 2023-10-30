// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 2-2. 환율 정보 들고 오기
// 3. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 4. 금액을 입력하면 환전이 된다
// 5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
// 6. 숫자를 한국어로 읽는 법
// 7. 반대로 밑의 박스에서 숫자를 바꿔도 위의 박스에 환율이 적용이 된다!

let currencyRatio = { // 환율
  // 객체 변수
  USD: {
    // 객체 속의 객체 변수
    KRW: 1268.14,
    USD: 1,
    JPY: 138.13,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00079,
    JPY: 0.11,
    unit: "원",
  },
  JPY: {
    KRW: 9.18,
    USD: 0.0072,
    JPY: 1,
    unit: "엔",
  },
};
let fromCurrency = "USD";
let toCurrency = "USD";

// console.log(currencyRatio.JPY.unit) // 객체를 읽어오는 첫 번째 방식
console.log(currencyRatio["JPY"]["unit"]); //  두 번째 방식
// console.log(currencyRatio["JPY"]."unit"); // 도 상관없음

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    // 2. 버튼의 값을 바꾼다
    document.getElementById("from-button").textContent = this.textContent;
    // 3. 선택된 currency값을 변수에 저장해준다
    fromCurrency = this.textContent;
    console.log("fromCurreny는", fromCurrency);
    convert(); // 환전하는 함수 호출. 드랍다운 리스트의 값이 바뀔 때마다 환전을 다시 한다
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    // 2. 버튼의 값을 바꾼다
    document.getElementById("to-button").textContent = this.textContent;
    // 3. 선택된 currency값을 변수에 저장해준다
    toCurrency = this.textContent;
    console.log("toCurreny는", toCurrency);
    convert(); // 환전하는 함수 호출. 드랍다운 리스트의 값이 바뀔 때마다 환전을 다시 한다
  })
);

// 1. 키를 입력하는 순간: onkeyup="convert()"
// 2. 환전이 돼서
// 3. 환전된 값이 보인다
function convert() { // 환전하는 함수
  // 환전: 얼마를 환전하는가? 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지
  // 돈 * 환율 = 환전금액
  let amount = document.getElementById("from-input").value; // from-input에 입력한 id값을 가지고 옴
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]; // 환전금액 = 돈 * 환율
  console.log("환전 결과!: ", convertedAmount);

  document.getElementById("to-input").value = convertedAmount; // 환전된 값이 보인다
}

// 1. 드랍다운 리스트의 값이 바뀔 때마다 환전을 다시 한다