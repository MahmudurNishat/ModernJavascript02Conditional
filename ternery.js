// Ternary operator --- means Three condition

// Ternary structure

//condition ? when it is true , it shows the message (if)  :  when it is false,it shows the message(else)
---------------------------------------------------------------------
---------------------------------------------------------------------


// basic if else ;
--------------------------------------------
// 1  basic ta 
const age = 15;

if ( age >=18){
    console.log("you can vote ");
}else {
    console.log("you cannot vote");
}
--------------------------------------------
// 1 tarnary part 

const age = 15;
age >=18 ? console.log("you can vote"):console.log("you cannot vote");

---------------------------------------------------------------------
---------------------------------------------------------------------


/// 2 variableIfElse
--------------------------------------------
let price = 500;
const isLeader = false;

if ( isLeader === true){
    price = 0;
    console.log(price);
}else {
    price = price + 100
    console.log(price);
}
--------------------------------------------
/// then make it ternary 


// 2 ternarVariableIfelse 

let price = 500;
const isLeader = true;

// variable = condtion ? true , message : false message 
price = isLeader === true ? 0 : price + 100;
console.log(price)
--------------------------------------------
--------------------------------------------
// 3 semi advance ternary js and basic if else ///
// 3 basic if else 

let price = 500;
const isLeader = false; 

if (isLeader === true){ /// leader er jonno 
    if(price > 1000){ /// jodi price 1000 er besi hoi taile 50%
        // 50% discount 
        price = price / 2;
        console.log(price);  
// ternary 
// condition ? if : else 
 //price > 1000 ? price / 2 : 0

    }else{ /// jodi ta na hoi taile price 0 diba
        price = 0
        console.log(price);
    }

}else{ 
    price = price + 100; // mango people er jonno 
    console.log(price);
}

/// use this in ternary /// 

// * use simple var ternary first

//varName = condition ? if : else
let price = 200;
const isLeader = true;
// price = isLeader === true ?  0 : price + 100 // simple ta and then 1st if clause er ternary ready koren .
// * then use semi advance ternary 
// price > 1000 ? price / 2 : if clause ternary then 
price = isLeader === true ?  price > 1000 ? price / 2 : 0 : price + 100
console.log(price);