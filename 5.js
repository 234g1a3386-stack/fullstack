function calculatePrice(kms) {
    let price = 0;
    if (kms <= 4) {
        price = 30;
    } else if (kms <= 9) {
        price = 30 + 10;
    } else if (kms <= 19) {
        price = 30 + 10 + 15;
    } else {
        price = 30 + 10 + 15 + (kms - 19) * 20;
    }
    return price;
}

let travelled = 19.5;
console.log("Total price:", calculatePrice(travelled)); 