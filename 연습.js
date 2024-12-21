let productList=[]
let priceList=[]
let dayList=[]

function book(){
    let day=document.querySelector('.day');
    let product=document.querySelector('.product');
    let pric=document.querySelector('.pric');
    
    let d=day.value;
    let pro=product.value;
    let p=pric.value;
    
    dayList.push(d)
    productList.push(pro)
    priceList.push(p)

    console.log(dayList);
    console.log(productList);
    console.log(priceList);

    return dayList,productList,priceList;
}

function mList(){
    let list=document.querySelector('.list');
    
    let html=`<table border=1>`;

    
    for(let index=0;index<=productList.length-1;index++){
        html+=`<tr><td>${dayList[index]}</td>
        <td>${productList[index]}</td>
        <td>${priceList[index]}</td></tr>`
    }
    html+=`</table>`
    
    list.innerHTML=html;


}





/*function accountBook(date,product,price){
 let date=document.querySelector('.date');
 let product=document.querySelector('.product');
 let price=document.querySelector('.price');

 let day=date.value;
 let name=product.value;
 let price=price.value;

 accountList.push(day,name,price);
 
 return accountList;
}

function list(){
    let list=document.querySelector('.list')
    let html=``;
    for(let index=0;index<= accountList.length-1;index++){
        html+=`<div>${accountList[index]}</div>`
    }
    list.innerHTML=html;
}

 <input class="product" type="text"placeholder="항목"/>
    <input class="price" placeholder="가격"/>
    <button onclick="accountBook(date,product,price)">등록</button>

    <h3>미니 가계부 정보 출력</h3>
    <button onclick="list()"> 가계부 출력</button>
    <div class="list">

    </div>

    */

  /*  <div class="list">
        <table >
            <tr>
                <td><button onclick="mList()">가계부 출력</button></td>
            </tr>
        </table>

    </div>*/