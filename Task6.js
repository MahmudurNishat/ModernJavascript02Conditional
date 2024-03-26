
/// Ticket fare Calculator :

let ticketPrice = 500;
let age = 8;

if (age < 10){
    ticketPrice = 0;
    console.log(ticketPrice);
}else if (age >=10 && age <= 24){
    // 50% discount
    let discount = ticketPrice * (50/100);
    let payprice = ticketPrice - discount;
    console.log(payprice);
}else if(age >=60){
    // 15% discount
    let discount = ticketPrice * (15/100);
    let payprice = ticketPrice - discount;
    console.log(payprice);
}
else{
    ticketPrice = 800;
    console.log(ticketPrice);
}

/// Ticket fare Calculator :