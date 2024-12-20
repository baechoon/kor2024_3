let numlist=[];
let num=``;
let searchIndex =``;

for(let i=1;i<=6;i++){
num=Number(prompt(`${i}숫자입력`)) 
if(num==0 || num>=46){i-- ;continue} // 만약 0이거나 45보다 크다면 다시 반복문으로 , 증감식이 증감되면 안됨 
else if (numlist.length==0){numlist.push(num),numHTML+=numlist} //만약 배열에 저장된게 없다면 저장
else if(numlist.includes(num)==true){i-- ;continue} // 입력한 숫자가 리스트에 있다면 반복문으로, 증감식이 증가되면 안됨 
else{numlist.push(num),numHTML+=numlist } //입력값 리스트에 저장 
}console.log(numlist);
 



/*for(let index=0; index<=numlist.length-1;index++){

   if(numlist[i]==searchIndex){break}
}
} console.log(numlist);

/*for(let index=0; index<=numlist.length-1;index++){
    if(numlist[index]==num){numlist.slice(index,1)
        break
}
};*/

/*for(let index=0; index<=numlist.length-1;index++){
    if(numlist[index]==num){numlist.slice(index,1),
        num=Number(prompt(`숫자입력`)),
        numlist.push(num)
        continue;
     }else{console.log(numlist)}
    }*/

//if(num==0 &&num>45){ }
//else{numlist.push(num) }


/*for(let index=0; index<=numlist.length-1;index++){
    if(numlist[index]==num){numlist.slice(index,1),
        num=Number(prompt(`숫자입력`)),
        numlist.push(num)
        continue
     }else{console.log(numlist)}

}*/



