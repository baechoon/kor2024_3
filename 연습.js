let memberTable = [];
//1. 회원가입시 아이디 중복검사 , 이미 등록된 아이디 이면 회원가입 실패 , 유효성검사.
function signUp(){ 
    
    console.log( 'signip() 실행 '); 
    
    let signid = document.querySelector('.signid'); console.log( signid );
    let signpw = document.querySelector('.signpw'); console.log( signpw );
    let signnic = document.querySelector('.signnic'); console.log( signnic );
    
    let id = signid.value;          console.log( id );
    let pw = signpw.value;          console.log( pw );
    let nicname = signnic.value;    console.log( nicname );
   
    let memberDto = { id : id , pw : pw , nicname : nicname  }; console.log( memberDto );
   
    memberTable.push( memberDto ) ; 
    console.log( memberTable );

    // 1. 회원가입시 아이디 중복검사 , 이미 등록된 아이디 이면 회원가입 실패 , 유효성검사.
    
    for(let index=0;index<=memberTable.length-1;index++){
        let memeber=memberTable[index].id;
        if(memberTable.length ==1){alert(`아이디 사용가능`)} // 배열에 저장된 아이디가 처음으로 저장된 거라면
        else if(memeber==id){alert(`아이디중복`)}// 입력된 아이디가 배열의 인덱스번째에 있는 아이디라면 중복
        else{alert(`아이디 사용가능`)}// 그외 사용가능
        break;
        
    }

    //2. 회원가입시 비밀번호 유효성검사 , 비밀번호는 최소 5 ~ 10 글자 이내로 입력 제한 하시오.
    let pwNumber=pw.length; // 비밀번호의 길이를 변수에 저장
    if(pwNumber<5 ||pwNumber>10){alert(`비밀번호는 5~10글자 이내로 작성하세요`)}
    else{alert(`비밀번호 등록 완료`)}
   
     
    signid.value = ''; 
    signpw.value = '';
    signnic.value = '';

    return;

} // f end 

function login(){
    console.log( 'login() 실행'); 
   
    let loginid = document.querySelector('.loginid'); 
    let loginpw = document.querySelector('.loginpw');
    
    let id = loginid.value;
    let pw = loginpw.value;
    
    let loginState = false ; 
    for( let index = 0 ; index <= memberTable.length-1 ; index++ ){
        
        let memberDto = memberTable[index]; 
        if( memberDto.id == id && memberDto.pw == pw ){
            
            loginState = true; 
            break; 
        }
    } // for end 
   
    if( loginState == true ){  alert(`로그인 성공`);}
    else{ alert('동일한 회원정보가 없습니다. ') }

    //3. 로그인시 성공시 상단에 로그인성공한 회원의 닉네임을 출력하시오.
   
    let nicname=`` // 현재 input 값은 아이디와 비밀번호뿐, 닉네임을 가져오려면 변수를 하나 선언해준다
            for(let index=0;index<=memberTable.length-1;index++){// 멤버 배열 조회하면서
            let memberDto = memberTable[index];//멤버 배열에 있는 객체를 dto에 저장
             nicname=memberDto.nicname;}// 객체의 닉네임을  변수에 저장해주기 
            
             for(let index=0;index<=memberTable.length-1;index++){// 다시 멤버배열을 조회하면서
                let memberDto = memberTable[index]; // 멤버배열에 있는 객체를 dto에 저장
                 if( memberDto.id == id && memberDto.pw == pw &&memberDto.nicname==nicname )// 객체의 아이디 비밀번호 닉네임이 모두 같을 때
                    {alert(`${nicname}님 환영합니다`)}}// 닉네임 출력
        
        
    //4. 로그인 화면 아래 현재 로그인된 회원들의 명단 출력하시오.
    //  모든 회원[배열] 의 아이디와 닉네임 만 출력하시오.
    let memberListBox=document.querySelector('.memberListBox');
    let html=`<tabel>`;
    
    for(let index=0;index<=memberTable.length-1;index++){
        let member = memberTable[index]; 
        
            if (member.id==id && member.pw==pw &&member.nicname==nicname){
                 
                html+=`<tr><td>아이디:${id}</td>
                <td>닉네임:${nicname}</td></tr>`
            }
        }
        
    
     html+=`</table>`;
    memberListBox.innerHTML=html;
   
    loginid.value = ``;
    loginpw.value = ``;
    return;
} // f end 

