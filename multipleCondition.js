
const salary = 25000; /// const value never changable
const isBcs = true;
const height = 61;

if ( salary>20000){
    console.log("supatro"); // if condition true , 
}else{
    console.log("onno patro khuji");
}

const salary = 25000; /// const value never changable
const isBcs = true;
const height = 61;

if ( salary>20000 && height > 66){
    console.log("supatro"); // if both condition true , then it goes here (when and )
}else{
    console.log("onno patro khuji");
}

const salary = 25000; /// const value never changable
const isBcs = true;
const height = 61;

if ( salary>20000 || height > 66){
    console.log("supatro"); // if one condition true , then it goes here (when or)
}else{
    console.log("onno patro khuji");
}

const salary = 25000; /// const value never changable
const isBcs = true;
const height = 67;

if ( salary>20000 || height > 66){
    console.log("supatro"); // if one condition true , then it goes here (when or) , if both condition true  it also goes here 
}else{
    console.log("onno patro khuji");
}


const salary = 25000; /// const value never changable
const isBcs = true;
const height = 61;

if ( salary>25000 || height > 66){
    console.log("supatro"); // ekane kono condition e fill up hoi nai , tai else e jabe
}else{
    console.log("onno patro khuji");
}

/ more and more condition 

const salary = 25000; /// const value never changable
const isBcs = true;
const height = 62;

if ( salary>25000 || height > 66 || isBcs== true){
    console.log("supatro"); // if one condition true , then it goes here (when or) , if both condition true  it also goes here 
}else{
    console.log("onno patro khuji");
}

complex condition 1

const salary = 25000; /// const value never changable
const isBcs = true;
const height = 62;
const hasCar = true;

if ( (salary >20000 && hasCar == true) || isBcs == true){
    console.log("14 gosti raji"); // ekane hoi 1st bractet er condition purata true or isbcs. jekono ekta
}else{
    console.log("onno patro khuji");
}


// complex condition 2 
const salary = 2000; /// const value never changable
const isBcs = true;
const height = 62;
const hasCar = true;

if ( (salary >20000 || hasCar == true) && isBcs == true){
    console.log("14 gosti raji"); // ekane hoi 1st bractet er condition bitore jokono 1ta condition true hobe and bracket baire bcs hoite hobe taile bitore dokbe
}else{
    console.log("onno patro khuji");
}

/// = (equal means variable value set , == means comparing )