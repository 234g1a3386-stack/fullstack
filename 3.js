let speed = 30;
let distance = 0;
for(i=10;i<=90;i+=10){
    distance = distance+speed/6;
    if (speed<120){
        speed*=2;
    }
}
distance = distance + speed/10
console.log(distance);









let speed = 30;
let distance = 0;
for (let i = 10; i <= 90; i += 10) {
    distance += speed / 6; 
    if (speed < 120) {
        speed = Math.min(speed * 2, 120);
    }
}
distance += speed * (6 / 60); 
console.log(distance); 