
// [지문1] 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 를 console.log() 함수로 출력하시오.
    
let 점수1 = Number( prompt('[지문1] 첫번째 점수 입력 : ') )
let 점수2 = Number( prompt('[지문1] 두번째 점수 입력 : ') )
let 점수3 = Number( prompt('[지문1] 세번째 점수 입력 : ') )

let 총점 = 점수1 + 점수2 + 점수3 ;

if( 총점 >= 90 ){ 

    console.log('성공');
}else{
    
    console.log('실패');
}

// [지문2] 2개의 정수를 각 입력받아 더 큰수 를 console.log() 함수로 출력하시오.(단] 동일한수 제외)
   
let 정수1 = Number( prompt('[지문2] 첫번째 정수 입력 : ') )
let 정수2 = Number( prompt('[지문2] 두번째 정수 입력 : ') )

if( 정수1 > 정수2 ){ 
    console.log( 정수1 ); 
}else{
    console.log( 정수2 ); 
}

// [지문3] 3개의 정수를 각 입력받아 가장 큰수 를 console.log() 함수로 출력하시오.

let a=Number(prompt(`1.정수입력`));
let b=Number(prompt(`2.정수입력`));
let c=Number(prompt(`3.정수입력`));

if(a>b && a>c){console.log(a);}
else if(b>a &&b>c){console.log(b);}
else{console.log(c);}

//[지문4] 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 console.log() 함수로 출력하시오.  (단] 동일한수 제외) 
//내림차순
let d=Number(prompt(`1.정수입력`));
let e=Number(prompt(`2.정수입력`));
let f=Number(prompt(`3.정수입력`));
if(d>e && d>f &&e>f ){console.log(d,e,f)}
else if (d>e && d>f &&e<f ){console.log(d,f,e)}
else if (e>d && e>f &&d>f ){console.log(e,d,f)}
else if (e>d && e>f &&d<f ){console.log(e,f,d)}
else if (f>d && f>e &&d>e ){console.log(f,d,e)}
else{console.log(f,e,d)};


//[지문5] 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 
// 70점이상 'C등급' 그외 '재시험' 를 console.log() 함수로 출력하시오.

let score=Number(prompt(`점수입력`));

if(score>=90){console.log(`A등급`);}
else if(score>=80){console.log(`B등급`);}
else if(score>=70){console.log(`C등급`);}
else{{console.log(`재시험`);}}

//[지문6] 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패'
 //를 console.log() 함수로 출력하시오.

let id=prompt(`아이디 입력`);
let pass=Number(prompt(`비밀번호 입력`));
if(id==`admin` && pass==1234){console.log(`로그인 성공`)}
else{console.log(`로그인 실패`)};

//[지문7] 아래와 같이 과일 배열 선언하고 새로운 과일명을 입력받아 fruitList 에 존재하는 과일이면 
//'이미 존재하는 과일입니다' 출력  아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 console.log() 함수로 출력하시오.
//let fruitList = [ '바나나' , '사과' ]
let  fruitList = [ '바나나' , '사과' ]; //1과일 배열 선언하기
let fruit= prompt(`과일입력`);// 2. 과일 입력받기
let searchIndex=fruitList.includes(fruit); //3. 입력 받은 과일이 배열에 존재하는지 확인하기

if(searchIndex==true){console.log(`이미 존재하는 과일입니다`)}//4. 존재한다면
else{fruitList.push(fruit), console.log(fruitList)};// 존재하지 않는다면 입력받은 값 배열에 추가하고 출력하기

//[지문8] 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 
// 여자이면 'red' 을 대입 하고 색상변수 를 console.log() 함수로 출력하시오.
let 주민번호=prompt(`주민번호입력`);
주민번호.charAt(6) // 문자열로 받아서 7번째가 2 이면 여자 1 이면 남자
if(주민번호.charAt(6)==1||주민번호.charAt(6)==3){console.log(`blue`)}
else{console.log(`red`)};



//[지문9] 가위바위보 게임 
//조건1 : 가위 0 , 바위 1 , 보 2 입니다.
//조건2 : 플레이어 2 명 입니다.
//실행조건 : 각 플레이어가 가위,바위,보 중에 한번씩 입력받기 
//출력조건 : 
//플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
//플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
//비겼을경우 '무승부' 를 console.log() 함수로 출력하시오.
let play1=Number(prompt(`play1 :0.가위 1.바위 2.보 숫자로 입력`));
let play2=Number(prompt(`play2 :0.가위 1.바위 2.보 숫자로 입력`));

if(play1==0&&play2==2 || play1==1&&play2==0||play1==2&&play2==1){ console.log(`플레이어1 승리`)}
else if(play2==0&&play1==2 || play2==1&&play1==0||play2==2&&play1==1){ console.log(`플레이어2 승리`)}
else{console.log(`무승부`)};




//[지문10] 아래와 같이 좌석 3개의 상태를 가지는 배열 선언하고 하나의 좌석 순서번호(인덱스) 를 입력받아 
//빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오. 예약상태 구분 방법] 빈좌석 : 'X'  사용중인좌석 : 'O' 

let sheetList = [ 'O' , 'X' , 'O' ]
let sheet=Number(prompt(`0~2 번호 입력`));// 인덱스 번호 입력받아
if(sheetList[sheet]==`O`){console.log(`사용중`)} //리스트에 적용
else{console.log(`빈좌석`)};

//[지문11]주차장 차량 검색대
//조건1(차량번호) : let carArray = [ '250어7142' , '142가7415' ] 
//조건2(주차위치) : let locationArray = [ 'A1' , 'B3' ]           	
//조건3 : carArray, locationArray 배열내 인덱스가 같으면 같은 차량의 정보
//조건4 : 차량번호 입력받아 내 차량 위치 찾기 를 반환해주세요.
//실행 예] 만일 배열내 존재하면 차량번호를 입력했으면 주차위치를 출력 하고 존재하지 않으면 '존재하지 않습니다' 를 console.log() 함수로 출력하시오.
let carArray = [ '250어7142' , '142가7415' ] 
let locationArray = [ 'A1' , 'B3' ] 

let car=prompt(`차량번호 입력`);

let searchIndex2 = carArray.includes(car); //입력받은 차량이 리스트에 존재하는지?
let searchIndex3 = carArray.indexOf(car);// 입력받은 차가 존재한다면 그 인덱스 번호 저장
if(searchIndex2 ==true){console.log(locationArray[searchIndex3])}// 입력받은 차가 존재한다면 입력받은 차의 인덱스 번호는를 주차위치 인덱스 번호와 동일하게 하여 출력
else{console.log(`존재하지 않습니다`)};



