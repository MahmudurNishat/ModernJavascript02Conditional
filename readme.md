
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