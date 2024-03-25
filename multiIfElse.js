
// shopping ifElse
 const price = 2700;

 if (price >=5000){
    // 10% discount//
    const discountPrice = price * 10/100
    const payAmount = price - discountPrice;
    console.log(payAmount);
 }
 else if(price >= 3000){
  // 5% discount //
  const discountPrice = price * 5/100;
  const payAmount = price - discountPrice;
  console.log(payAmount);
 }
 
 else{
    console.log(price);
 }///

 //restaurant er hisab .

 const age =45;
 const Prices = 500;

 if (age <=12){
console.log("you can eat freee");
 }

 else if (age >=60){
    // 50% discount //
    const discount = Prices * 50/100;
    const payPrice = Prices - discount;
    console.log(payPrice);
 }
 else if (age >=50){
   // 15% discount
   const discount = Prices * 15/100;
   const payPrice = Prices - discount;
   console.log(payPrice)
}
 else if (age >=40){
   // 10% discount
   const discount = Prices * 10/100;
   const payPrice = Prices - discount;
   console.log(payPrice)
}

 else{
    console.log(Prices);
 }///

 // Task Bmi //

 const number = -2;

 if (number>=80 && number <=100){
   console.log("you have got A+");
 }else if (number>=70 && number <= 79){
   console.log("you have got A");
 }else if (number>=60 && number <= 69){
   console.log("you have got A-");
 }else if (number>=50 && number <= 59){
   console.log("you have got B");
 }else if (number>=40 && number <= 49){
   console.log("you have got C");
 }else if (number>=33 && number <= 39){
   console.log("you have got D");
 }else if (number>=0 && number <= 32){
   console.log("you are fail");
 }else{
   console.log("invalid number");
 }

 // Task Bmi calcultor .

 const weightKg = 60;
 const heightM = 1.75;
 const bmi = weightKg / (heightM * heightM);

 if ( bmi < 18.5){
   console.log("you are underweight");
 }else if ( bmi >= 18.5 && bmi < 25){
   console.log ("normal weight")

 }else if ( bmi >=25.5 && bmi <30){
   console.log("overweight")
 }else {
   console.log("invaild number");
 }

 // CREATTING CALCULATOR USING IF ELSE ; 

 const num1 = parseFloat(prompt("Enter Your First Number"));
 const num2 = parseFloat(prompt("Enter Your Seond Number"));
 const operator = prompt ("Enter the operator (+,-,*,/)") ;
 let result;
 if (operator === "+"){
  result = num1 + num2;
  console.log(result);
 }else if ( operator === "-"){
  result = num1 - num2;
  console.log(result);
 }else if ( operator === "*"){
  result = num1 + num2;
  console.log(result)
 }else if ( operator === "/"){
  if(num2 !== 0){
    result = num1/num2;
    console.log(result);
  }else{
    console.log("undefined");
  }
 }else{
  console.log("invaid operator")
 }//
 
 
 