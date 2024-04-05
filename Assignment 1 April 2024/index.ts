//Question 1
let greetings = "Hello world";
console.log("Q1: greetings");
//Question 2
let n1 = 10;
let n2 = 2;
console.log("Q2: let numbers = 10 and 2");
let add = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;
console.log("    their sum = ", add);
console.log("    their difference = ", sub);
console.log("    their product = ", mult);
console.log("    their quotient = ", div);
//Question 3
let no1 = 5;
let no2 = 10;
console.log("Q3: Before swapping");
console.log("    number 1 =", no1);
console.log("    number 2 =", no2);
no2 = no2 - no1;
no1 = no1 + no2;
console.log("    After swapping");
console.log("    number 1 =", no1);
console.log("    number 2 =", no2);
//Question 4
let message: string;
message = "hey"; // message cannot be assigned a number it generates error
console.log("Q4  =", message);
//Question 5
let num1 = 3;
let num2 = 10;
console.log("Q5: number 1 =", num1);
console.log("    number 2 =", num2);
console.log("    their Remainder = ", (num2 %= num1));
//Question 6
let F_way = 0;
let S_way = 0;
F_way++;
S_way = 0 + 1;
console.log("Q6: A way of increment", F_way);
console.log("    Another way of increment", S_way);
//Question 7
let x = true;
let y = false;
let z = true;
console.log("Q7  AND For xy", x && y);
console.log("    OR For xy", x || y);
console.log("    NOT For xy", !x, !y);
console.log("    And For xz", x && z);
console.log("    OR For xz", x || z);
console.log("    Not For xz", !x, !z);
console.log("    AND For yz", y && z);
console.log("    OR For yz", y || z);
console.log("    NOT For yz", !y, !z);
//Question 8
let num = 10;
console.log("Q8  number = ", num);
num += 2;
console.log("    10+=2", num);
num -= 2;
console.log("    12-=2", num);
num *= 2;
console.log("    10*=2", num);
num /= 2;
console.log("    20/=2", num);
//Question 9
let a = 2;
if (a % 2 === 0) {
  console.log("Q9  number is even", a);
} else {
  console.log("number is odd");
}
//Question 10
let age = 18;
if (age >= 18) {
  console.log("Q10 eligible to vote");
} else {
  console.log(" is not eligible to vote");
}
//Question 11
let score = 58;
if (score >= 98) {
  console.log("Grade is A");
} else if (score >= 80) {
  console.log("Grade is B");
} else if (score >= 60) {
  console.log("Grade is c");
} else if (score >= 50) {
  console.log("Q11 Grade is D");
} else {
  console.log("F");
}
//Question 12
let b = 10;
let c = 55;
let d = 16;
if (b > c) {
  if (b > d) {
    console.log(`Greater Number is: ${b}`);
  }
} else if (c > d) {
  console.log(`Q12 Greater Number is:`, c);
} else {
  console.log(`greater Number is: ${d}`);
}
//Question 13
let year = 2024;
if (year % 4 == 0) {
  console.log("Q13" + " " + year, "is a leap year");
} else {
  (" is not a leap year");
}
//Quesrion 14
let fahrenheit = 91;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log("Q14 Temprature in celsuis = ", celsius.toFixed(2));
//Question 15
let e = -16;
if (e < 0) {
  console.log(`Q15 Number is negative =`, e);
} else if (e > 0) {
  console.log("Number is positive =", e);
} else {
  console.log("Number is equal to zero");
}
//Question 16
let f = 2;
console.log("Q16 2 * 1 = ", 2 * 1);
console.log("    2 * 2 = ", 2 * 2);
console.log("    2 * 3 = ", 2 * 3);
console.log("    2 * 4 = ", 2 * 4);
console.log("    2 * 5 = ", 2 * 5);
console.log("    2 * 6 = ", 2 * 6);
console.log("    2 * 7 = ", 2 * 7);
console.log("    2 * 8 = ", 2 * 8);
console.log("    2 * 9 = ", 2 * 9);
console.log("    2 * 10 = ", 2 * 10);
