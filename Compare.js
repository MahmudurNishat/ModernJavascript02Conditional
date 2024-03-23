// Comparison operatior
// *   Larger >
// *   Less <
// *   Equal ==
// *   Greater than or equal >=
// *   Less than  or equal <=
// *   Not equal !=
// *   And &&
// *   Or ||

console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log(10 == 10);
console.log(15 >= 10);
console.log(15 <= 10);
console.log(5 <= 10);
console.log(100 <= 10);
console.log(10 == 10.1);


// variable comparison  
var applePrice = 250;
var peyeraPrice = 40;

console.log(applePrice>peyeraPrice)
console.log(applePrice<peyeraPrice)
console.log(applePrice<=peyeraPrice)
console.log(applePrice>=peyeraPrice)

// double equal == and threple qual ===

console.log(10 == "10") // output : true, it always check both values not type .se dektese value same tai true , aeta type check kore na
console.log(10 === "10") // output : false, it always check both values and type  se dektese value same then type check korbe ekta number and arekta string . tai false


// not equal != and double not equal  !==

console.log(10 != "10") // output : false,  aekane just se value check korbe , se dekce 10 , 10 er soman , kintu tomi bolco soman na , tai output : false

console.log(10 !== "10"); // output : true , karon se aekane value first e check korbe ,se dektece value thik ase , then check korbe type , se dekce ekta arrekta string , tai jokon bola hocce 10 string 10 er soman na , tokon se output dekabe : true