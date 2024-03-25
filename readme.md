
     Know the Js comparison operator  <start>

 Comparison operatior 
 *   Larger >
 *   Less <
 *   Equal ==
 *   Greater than or equal >=
 *   Less than  or equal <=
 *   Not equal !=
 *   And &&
 *   Or ||

console.log(5 > 10); <br>
console.log(5 < 10);<br>
console.log(5 == 10);<br>
console.log(10 == 10);<br>
console.log(15 >= 10);<br>
console.log(15 <= 10);<br>
console.log(5 <= 10);<br>
console.log(100 <= 10);<br>
console.log(10 == 10.1);<br>


// variable comparison  <br>
var applePrice = 250;<br>
var peyeraPrice = 40;<br>

console.log(applePrice>peyeraPrice)<br>
console.log(applePrice<peyeraPrice)<br>
console.log(applePrice<=peyeraPrice)<br>
console.log(applePrice>=peyeraPrice)<br>

// double equal == and threple qual ===<br>

console.log(10 == "10") // output : true, it always check both values not type .se dektese value same tai<br> true , aeta type check kore na<br>
console.log(10 === "10") // output : false, it always check both values and type  se dektese value same<br> then type check korbe ekta number and arekta string . tai false<br>


// not equal != and double not equal  !==<br>

console.log(10 != "10") // output : false,  aekane just se value check korbe , se dekce 10 , 10 er soman ,<br> kintu tomi bolco soman na , tai output : false<br>

console.log(10 !== "10"); // output : true , karon se aekane value first e check korbe ,se dektece value<br> thik ase , then check korbe type , se dekce ekta arrekta string , tai jokon bola hocce 10 string <br>10 er soman na , tokon se output dekabe : true<br>

        Know the Js comparison operator  <End>
=================================================

        Know the Js If else condition <start>
============================================        
// * structure /// <br>

if (condition){<br>
    console.log() // jodi condition true hoi <br>
}<br>
else{<br>
    console.log() // josi false hoi taile<br>
}
==============================
// if else basic //<br>

//if (10>7){<br>
    console.log("I will be software Engineer.") // jodi condition true hoi taile bitore dokbe .. naile<br> baire jabe<br>
}<br>
else{<br>
    console.log(" it will happen , InsaAllah") /// jodi condition false hoi .<br>
}<br>


// vairable if else<br>

var weight = 50;<br>
if (weight <30){<br>
    console.log("i will carry it");<br>
}<br>
else{<br>
    console.log("i will rent a rickshaw");<br>
}<br>

// var weight = 20;<br>
if (weight <20){<br>
    console.log("i will carry it"); // aeta true hobe na , karon 20 to 20 er choto na.<br>
}<br>
else{<br>
    console.log("i will rent a rickshaw"); // karon 20 er 20 er choto noi tai jehoto upore true condition<br> e jai nai , tai aeta nice jabe .<br>
}<br>


        Know the Js If else condition <End>
=================================================

        Know the Js Multiple Condition Logical Operators <Start>
======================================================================
        
--------------------------------------------------------------------------
const salary = 25000; /// const value never changable <br>
const isBcs = true;<br>
const height = 61;<br>

if ( salary>20000){<br>
    console.log("supatro"); // if condition true , <br>
}
else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------

-----------------------------------------------------------------------
const salary = 25000; /// const value never changable<br>
const isBcs = true;<br>
const height = 61;<br>

if ( salary>20000 && height > 66){<br>
    console.log("supatro"); // if both condition true , then it goes here (when and )<br>
}<br>
else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------
-----------------------------------------------------------------------
const salary = 25000; /// const value never changable <br>
const isBcs = true;<br>
const height = 61;<br>

if ( salary>20000 || height > 66){<br>
    console.log("supatro"); // if one condition true , then it goes here (when or)<br>
}<br>
else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------
-----------------------------------------------------------------------
const salary = 25000; /// const value never changable <br>
const isBcs = true;<br>
const height = 67;<br>

if ( salary>20000 || height > 66){<br>
    console.log("supatro"); // if one condition true , then it goes here (when or) , if both condition <br>true  it also goes here <br>
}<br>
else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------
-----------------------------------------------------------------------

const salary = 25000; /// const value never changable<br>
const isBcs = true;<br>
const height = 61;<br>

if ( salary>25000 || height > 66){<br>
    console.log("supatro"); // ekane kono condition e fill up hoi nai , tai else e jabe<br>
}else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------
-----------------------------------------------------------------------
/ more and more condition <br>

const salary = 25000; /// const value never changable<br>
const isBcs = true;<br>
const height = 62;<br>

if ( salary>25000 || height > 66 || isBcs== true){<br>
    console.log("supatro"); // if one condition true , then it goes here (when or) , if both condition<br> true  it also goes here <br>
}else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------
-----------------------------------------------------------------------
complex condition 1<br>

const salary = 25000; /// const value never changable<br>
const isBcs = true;<br>
const height = 62;<br>
const hasCar = true;<br>

if ( (salary >20000 && hasCar == true) || isBcs == true){<br>
    console.log("14 gosti raji"); // ekane hoi 1st bractet er condition purata true or isbcs. jekono ekta<br>

}else{<br>
    console.log("onno patro khuji");<br>
}<br>

-----------------------------------------------------------------------
-----------------------------------------------------------------------
// complex condition 2 <br>
const salary = 2000; /// const value never changable<br>
const isBcs = true;<br>
const height = 62;<br>
const hasCar = true;<br>

if ( (salary >20000 || hasCar == true) && isBcs == true){<br>
    console.log("14 gosti raji"); // ekane hoi 1st bractet er condition bitore jokono 1ta condition true hobe and bracket baire bcs hoite hobe taile bitore dokbe<br>
}else{<br>
    console.log("onno patro khuji");<br>
}

/// = (equal means variable value set ), == means comparing two variable<br>

        Know the Js Multiple Condition Logical Operators <End>
=======================================================================




        Know the Js Multiple ifelse and Exercise  <Start>
=======================================================================

---------------------------------------------------------
---------------------------------------------------------
// shopping ifElse <br>

 const price = 2700;<br>

 if (price >=5000){<br>
    // 10% discount//<br>
    const discountPrice = price * 10/100<br>
    const payAmount = price - discountPrice;<br>
    console.log(payAmount);<br>
 }
 else if(price >= 3000){<br>
  // 5% discount //<br>
  const discountPrice = price * 5/100;<br>
  const payAmount = price - discountPrice;<br>
  console.log(payAmount);<br>
 }<br>
 
 else{<br>
    console.log(price);<br>
 }///<br>


---------------------------------------------------------
---------------------------------------------------------
 //restaurant er hisab .<br>

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

---------------------------------------------------------
---------------------------------------------------------

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

---------------------------------------------------------
---------------------------------------------------------

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

---------------------------------------------------------
---------------------------------------------------------
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
      
---------------------------------------------------------
---------------------------------------------------------

        Know the Js Multiple ifelse and Exercise <End>
=======================================================================


