
let speed = 30;
const maxSpeed = 120;
const travelTimeMinutes = 96;
let travelled = 0;
let minutes = 0;

while (minutes < travelTimeMinutes) {
    
    let timeHr = 10 / 60; 
    let distanceThisStep = speed * timeHr;
    travelled += distanceThisStep;
    minutes += 10;
    
    speed = Math.min(speed * 2, maxSpeed);
}

console.log(`Total travelled distance in 96 minutes: ${travelled} km`);
