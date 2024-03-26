
/// Task 2 : BMI Calculator

const weightKg = 70;
const heightM = 1.75;

const bmi = weightKg /(heightM*heightM);

if ( bmi < 18.5){
    console.log("you are underWeight");
}else if( bmi >=18.5 && bmi <= 24.9) {
    console.log("you are normal");

}else if ( bmi >= 25 && bmi <= 29.9){
    console.log("you are overweight")
}else {
    console.log("you are obese");
}

/// Task 2 : BMI Calculator