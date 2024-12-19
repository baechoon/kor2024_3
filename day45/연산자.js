
// [1] 산술연산자 
console.log( 10 + 3 ); // 덧셈 13
console.log( 10 - 3 ); // 뺄셈 7
console.log( 10 * 3 ); // 곱셈 30
console.log( 10 / 3 ); // 나눗셈 3.33333333~
console.log( 10 % 3 ); // 나눈결과나머지 1
console.log( parseInt( 10 / 3 ) ); // 몫 3 , parseInt( 값 ) : 소수점 버리고 정수만 반홤함수
console.log( `점수 : ` + 10 );  // 덧셈이 아닌 연결 된다. "점수 : 10"

// [3] 비교연산자 
console.log( 10 > 3 ); // 10이 3보다 초과/크다 , true 
console.log( 10 >= 3 ); // 10이 3보다 이상/크거나같다 , true 
console.log( 10 < 3 );  // 10이 3보다 미만/작다 , false 
console.log( 10 <= 3 ); // 10이 3보다 이하/작거나같다 , false 
console.log( 10 == 3 ); // 10은 3 과 같다 . false 
console.log( 10 != 3 ); // 10은 3 과 다르다 . true 
console.log( 10 === "10" ); // 숫자 10 과 문자 10 은 같다. false 
console.log( 10 !== "10" ); // 숫자 10 과 문자 10 은 다르다 . true 

// [4] 관계연산자
console.log( 10 > 3 && 20 > 10 ); // true 이면서 true => true 
console.log( 10 > 3 && 20 > 30 ); // true 이면서 false => false 
console.log( 10 > 3 || 20 > 10 ); // true 이거나 true => true
console.log( 10 > 3 || 20 > 30 ); // true 이거나 false => true 
console.log( !(10 > 3) ); // true -> false 

// [5] 복합대입연산자 
let param = 10; // = , param 변수에 10값를 대입한다.
param += 3;     // += , param 변수에 3를 누적 합계를 한다. , param = param + 3;
param -= 5;     // -= , param 변수에 5를 뺀 누적 합계를 한다. , param = param - 5;

// [6] 증[가]감[소]연산자 
let age = 40;
console.log( age++ );   // 후위증가 , 출력 -> 증가 , 40
console.log( age );     // 41
console.log( ++age );   // 선위증가 , 증가 -> 출력 , 42
console.log( age );     // 42
console.log( age-- );   // 후위감소 , 출력 -> 감소 , 42
console.log( age );     // 41
console.log( --age );   // 선위감소 , 감소 -> 출력 , 40

// [7] 삼항연산자 
let score = 80; 
let result1 = score >= 80 ? "합격" : "불합격";
            //  조건   ? true일때코드 : false일때코드   
let reulst2 = score >= 80 ? "합격" : score >= 70 ? "재시험" : 불합격;





