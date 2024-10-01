const age=44;
const price=500;

if(age <= 12){
    console.log('foot for free');
}
else if( age >= 60) {
    // 25% discount
    const discount = price*50/100;
    const payAmount = price -discount;
    console.log(payAmount);

}
else if(age > 50){
    // discount 40% 
    const discount=price*40/100;
    const payAmount=price-discount;
    console.log(payAmount);
}
else if(age > 40){
    // discount 30% 
    const discount=price*30/100;
    const payAmount=price-discount;
    console.log(payAmount);
}
else{
    console.log(price)
}

