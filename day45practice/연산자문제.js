//[지문1]prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.

let kor=Number(prompt(`국어점수 입력`));
let eng=Number(prompt(`영어점수 입력`));
let math= Number(prompt(`수학점수 입력`));
//변수 선언해 입력받은 값 저장하기 , prompt() 는 문자열로 받기 때문에
  //숫자로 형변환을 해줘야 한다 -> Number() 
let sum1=kor+eng+math;
let avg=sum/3;
console.log(sum1);
console.log(avg);


//[지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
let num2= Number(prompt(`반지름 입력`));
let one= num2*num2*3.14;
console.log(one);

//[지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
// 예) 54.5  84.3 입력시 결과는 64%
let num3=Number(prompt(`실수입력`));
let num4=Number(prompt(`실수입력`));
let 값=parseInt((num3/num4)*100); // 소수점 버리기 parseInt
console.log(값);


//[지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
let num1 = prompt(`정수입력`);
let result1=num1%2==0? false:true;
console.log(result1);

//[지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
let num=Number(prompt(`정수입력`));
let result=num%7==0?true:false;
console.log(result);


//[지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 를 console탭에 출력하시오.
let id= prompt(`아이디입력`);
let pass=Number(prompt(`비밀번호입력`));
let log=id=='admin'&&pass==1234? true:false;
console.log(log);

//[지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
let nums =Number(prompt(`정수입력`));
let seven=nums%2!=0 && nums%7==0? true:false;
console.log(seven);

//[지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
//-> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장 

let m=Number(prompt(`십만원 단위 금액입력`));

let m1=parseInt(m/100000);// 십만원 3장, 입력받은 금액에서 십만원으로 나눈 몫

let m2=m-(m1*100000); // 만원권을 세려면? 입력받은 금액에서 십만원대 금액을 제거
let m3= parseInt(m2/10000); // 만원권 5장

let m4=m2-(m3*10000); // 천원권을 세려면? 위에서 제거한 금액에서 만원권 금액 제거
let m5=parseInt(m4/1000); //천원권 6장
console.log(`십만원${m1}장,만원${m3}장,천원${m5}장`);

//[지문9] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' 를 console탭에 출력하시오.
let score1=Number(prompt(`1차점수 입력`));
let score2=Number(prompt(`2차점수 입력`));
let sum=score1+score2;
let 결과=sum>=150? `합격`:`불합격`;
console.log(`결과:${결과}`);


//[지문10] 두 사람의 이름을 prompt함수로 각 입력받아서 
//-> 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략 하여  console탭에 출력하시오. ex] 유재석(방장) , 강호동 
let name1= prompt(`이름입력`)
let name2= prompt(`이름입력`)
let 이름= name1==`유재석`?`${name1}방장,${name2}`:name2==`유재석`?`${name1},${name2}방장`:`${name1},${name2}`;
console.log(이름);

