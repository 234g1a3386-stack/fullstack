let speed = 30; // initial speed in km/h
const maxSpeed = 120; // max speed in km/h
const totalDistance = 96; // total distance to travel in km
let travelled = 0;
let minutes = 0;

while (travelled < totalDistance) {
	// Calculate distance travelled in 10 minutes
	let timeHr = 10 / 60; // 10 minutes in hours
	let distanceThisStep = speed * timeHr;
	// If this step exceeds total distance, adjust
	if (travelled + distanceThisStep > totalDistance) {
		distanceThisStep = totalDistance - travelled;
	}
	travelled += distanceThisStep;
	minutes += 10;
	// Double the speed, but do not exceed maxSpeed
	speed = Math.min(speed * 2, maxSpeed);
}

console.log(`Total travelled distance: ${travelled} km in ${minutes} minutes.`);
console.log(`Total distance travelled: ${travelled} km`);
