let a = "goku";
let b = "goku";
let c = "goku";

if (a === b && b === c) {
  console.log("All are same");
}
else if (a === b) {
  console.log("a, b are same");
}
else if (b === c) {
  console.log("b, c are same");
}
else if (c === a) {
  console.log("c, a are same");
}
else {
  console.log("All are different");
}