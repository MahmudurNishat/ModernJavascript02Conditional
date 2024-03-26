
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

 const age =45;<br>
 const Prices = 500;<br>

 if (age <=12){<br>
console.log("you can eat freee");<br>
 }<br>

 else if (age >=60){<br>
    // 50% discount //<br>
    const discount = Prices * 50/100;<br>
    const payPrice = Prices - discount;<br>
    console.log(payPrice);<br>
 }
 else if (age >=50){<br>
   // 15% discount<br>
   const discount = Prices * 15/100;<br>
   const payPrice = Prices - discount;<br>
   console.log(payPrice)<br>
}
 else if (age >=40){<br>
   // 10% discount<br>
   const discount = Prices * 10/100;<br>
   const payPrice = Prices - discount;<br>
   console.log(payPrice)<br>
}<br>

 else{<br>
    console.log(Prices);<br>
 }<br>

---------------------------------------------------------
---------------------------------------------------------

 // Task Bmi //<br>

 const number = -2;<br>
<br>
 if (number>=80 && number <=100){<br>
   console.log("you have got A+");<br>
 }else if (number>=70 && number <= 79){<br>
   console.log("you have got A");<br>
 }else if (number>=60 && number <= 69){<br>
   console.log("you have got A-");<br>
 }else if (number>=50 && number <= 59){<br>
   console.log("you have got B");<br>
 }else if (number>=40 && number <= 49){<br>
   console.log("you have got C");<br>
 }else if (number>=33 && number <= 39){<br>
   console.log("you have got D");<br>
 }else if (number>=0 && number <= 32){<br>
   console.log("you are fail");<br>
 }else{<br>
   console.log("invalid number");<br>
 }<br>

---------------------------------------------------------
---------------------------------------------------------

 // Task Bmi calcultor .<br>

 const weightKg = 60;<br>
 const heightM = 1.75;<br>
 const bmi = weightKg / (heightM * heightM);<br>

 if ( bmi < 18.5){<br>
   console.log("you are underweight");<br>
 }else if ( bmi >= 18.5 && bmi < 25){<br>
   console.log ("normal weight")<br>

 }else if ( bmi >=25.5 && bmi <30){<br>
   console.log("overweight")<br>
 }else {<br>
   console.log("invaild number");<br>
 }<br>

---------------------------------------------------------
---------------------------------------------------------
 // CREATTING CALCULATOR USING IF ELSE ; <br>

 const num1 = parseFloat(prompt("Enter Your First Number"));<br>
 const num2 = parseFloat(prompt("Enter Your Seond Number"));<br>
 const operator = prompt ("Enter the operator (+,-,*,/)") ;<br>
 let result;<br>
 if (operator === "+"){<br>
  result = num1 + num2;<br>
  console.log(result);<br>
 }else if ( operator === "-"){<br>
  result = num1 - num2;<br>
  console.log(result);<br>
 }else if ( operator === "*"){<br>
  result = num1 + num2;<br>
  console.log(result)<br>
 }else if ( operator === "/"){<br>
  if(num2 !== 0){<br>
    result = num1/num2;<br>
    console.log(result);<br>
  }else{<br>
    console.log("undefined");<br>

  }<br>

 }else{<br>

  console.log("invaid operator")<br>

 }// <br>

---------------------------------------------------------
---------------------------------------------------------

        Know the Js Multiple ifelse and Exercise <End>
=======================================================================


      Know the Nested js & Exercise <Start>
=======================================================================

---------------------------------
---------------------------------
const money = -10;<br>

if (money >300 ){<br>
    console.log("you are boro loks.");<br>
}else{ <br>
    if ( money >200){ // nested if else  // jodi aeta na hoi , taile onnota , nested<br>
        console.log("foocka ka");<br>
    }else{<br>
        if(money>100){<br>
            console.log("jal muri ka ");<br>
        }else{<br>
            if(money>0){<br>
                console.log("kola ka");<br>
            }else{<br>
                console.log("tui amr bondu na");<br>
            }<br>
        }<br>
    }<br>
}<br>

---------------------------------
---------------------------------





     Know the Nested js & Exercise <End>
=======================================================================

     Know the ternary operator & Exercise <Start>
=======================================================================

// Ternary operator --- means Three condition <br>

// Ternary structure<br>

//condition ? when it is true , it shows the message (if)  :  when it is false,it shows the message(else)<br>

---------------------------------------------------------------------
---------------------------------------------------------------------


// basic if else ;<br>

--------------------------------------------
// 1  basic ta <br>
const age = 15;<br>

if ( age >=18){<br>
    console.log("you can vote ");<br>
}else {<br>
    console.log("you cannot vote");<br>
}<br>

--------------------------------------------
// 1 tarnary part <br>

const age = 15;<br>
age >=18 ? console.log("you can vote"):console.log("you cannot vote");<br>

---------------------------------------------------------------------
---------------------------------------------------------------------


/// 2 variableIfElse<br>

--------------------------------------------
let price = 500;<br>
const isLeader = false;<br>

if ( isLeader === true){<br>
    price = 0;<br>
    console.log(price);<br>
}else {<br>
    price = price + 100<br>
    console.log(price);<br>
}<br>

--------------------------------------------
/// then make it ternary <br>


// 2 ternarVariableIfelse <br>

let price = 500;<br>
const isLeader = true;<br>

// variable = condtion ? true , message : false message <br>
price = isLeader === true ? 0 : price + 100;<br>
console.log(price)<br>

--------------------------------------------
--------------------------------------------
// 3 semi advance ternary js and basic if else ///<br>
// 3 basic if else <br>

let price = 500;<br>
const isLeader = false; <br>

if (isLeader === true){ /// leader er jonno <br>
    if(price > 1000){ /// jodi price 1000 er besi hoi taile 50%<br>
        // 50% discount <br>
        price = price / 2;<br>
        console.log(price);  <br>
// ternary <br>
// condition ? if : else <br>
 //price > 1000 ? price / 2 : 0<br>

}else{ /// jodi ta na hoi taile price 0 diba<br>
        price = 0<br>
        console.log(price);<br>
}<br>

}else{ <br>
    price = price + 100; // mango people er jonno <br>
    console.log(price);<br>
}

/// use this in ternary /// <br>

// * use simple var ternary first<br>

//varName = condition ? if : else<br>
let price = 200;<br>
const isLeader = true;<br>
// price = isLeader === true ?  0 : price + 100 // simple ta and then 1st if clause er ternary ready koren .<br>
// * then use semi advance ternary <br>
// price > 1000 ? price / 2 : if clause ternary then <br>
price = isLeader === true ?  price > 1000 ? price / 2 : 0 : price + 100<br>
console.log(price);<br>

     Know the ternary operator & Exercise <End>
=======================================================================