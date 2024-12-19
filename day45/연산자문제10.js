let money=Number(prompt('십만원 단위 금액 입력'));
let m1= parseInt(money/100000);
let m2= parseInt(m1/10000);
let m3= parseInt(m2/1000);
console.log('십만원:'+m1+'장'+ '만원'+m2+'장'+'천원'+m3+'장');