let sum = 0;
let avg = 0;
let count = 0;

let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    sum += i;
    count++;
  }
  i++;
}

avg = sum/count;
console.log(avg);