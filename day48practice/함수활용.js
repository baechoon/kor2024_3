let productList=[] //각 항목들을 담을 배열 선언하기
let priceList=[]
let dayList=[]

function book(){
    //1. 특정한 선택자를 이용하여 dom 마크업 객체 가져오기
    let day=document.querySelector('.day');
    let product=document.querySelector('.product');
    let pric=document.querySelector('.pric');
    //2. 가져온 객체에서 value 속성값 가져오기
    let d=day.value;
    let pro=product.value;
    let p=pric.value;
    //3. 속성값을 배열에 담기
    dayList.push(d)
    productList.push(pro)
    priceList.push(p)
    //4. 값이 잘 들어갔나 확인
    console.log(dayList);
    console.log(productList);
    console.log(priceList);
    //5. 리스트 반환해주기
    return dayList,productList,priceList;
}

function mList(){
    //1. 특정한 선택자를 이용하여 dom 마크업 객체 가져오기
    let list=document.querySelector('.list');
    //2. table(표) 생성하기, 출력할 html 구성하기
    let html=`<table border=1>`;

    //3. 각 배열을 반복문을 돌면서 내용을 표에 대입하기 
    for(let index=0;index<=productList.length-1;index++){
        html+=`<tr><td>${dayList[index]}</td>
        <td>${productList[index]}</td>
        <td>${priceList[index]}</td></tr>`
    }
    html+=`</table>`
    //4. 출력할 html 문자열을 dom 객체의 innerHTML에 대입하기
    list.innerHTML=html;


}
