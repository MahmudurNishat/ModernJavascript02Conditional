const isLeader = false;

if (isLeader){ // jodi kono bulian value thake taile arr check er dorkar nai , karon ae man set kore disi je isleader = true , tar mane jodi true hoi taile e if clause e dokkbe , taile value kono dorkar nai,
// if er clause Always positive
// isleader true hole bitore
// isleader false hole else e
    console.log("chair e bosen");
}else{
    console.log("dore gea morr");
}

// Advanced not logical operator

//jodi false ke if er clause e dokate hoi

const isPassed = true;

if(!isPassed ){
    console.log("misty kababmo"); /// jodi varibale er age not operator jodi use kori taile
    // it automatically change its value
    //  ispassed = false , !ispassed = true , taile rules aager tai thaktese
    /// Advanced logical not operator value ta ke change korse ,
    /// ekon man jodi true hoi taile if e
    /// false hoi taile else e
}else {
    console.log("toke biya dia dimu ");

}

//output : toke biya dia dimu

// Advance double not logical operator

//false , !false = true , !!false = false  vice versa.
// empty string value Always False , !"" = true;

// Toggling booliean value ,

let isChampion = true;
isChampion = !isChampion; // value ke change kora
console.log(isChampion);

/// Falsy value
/// Falsy values in JavaScript include false, 0, "" (empty string), null, undefined, and NaN.

let inputValue = null;

if (!inputValue) {
  // null by default false , kintu jokon er age not dicci se true korce , taile koi jabe if e jabe
  console.log("iput value is falsy");
}

/// Truthy value ;

let userInput = "somevalue" // string e kicu thakle seta true hoi
if (!userInput){ // bakita bozar chesta koro
    console.log("user Input is empty");
}else{ // 
    console.log("userIput is " + userInput);
}

/// double bang operator !! double bang operator 

let userId = 10;
console.log(!!userId) // EXPECTED OUTPUT : TRUE ; TAR MANE USER ASE
console.log(!userId) // EXPECTED OUTPUT : False ; TAR MANE USER nai
console.log(userId) // EXPECTED OUTPUT : 10 ; TAR MANE USER ASE