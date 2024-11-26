const product = {
  id: 1,
  q1: "y = 3", //true
  q2: "y = 2", //false

  q3: "2^6", //false
  q4: "2^5", //true

  q5: "51.43", //false
  q6: "50.42", //true

  q7: "16π", //false
  q8: "50.24", //true

  q9: "6", //false
  q10: "-6", //true

  q11: "6x + 1", //false
  q12: "6x + 3", //true

  q13: "8", //true
  q14: "6", //false

  q15: "$16.20", //true
  q16: "$16.80", //false

  q17: "(4,6)", //true
  q18: "(3,5)", //false

  q19: "4/5", //false
  q20: "3/4", //true

  a1: "Solve for y: 2y + 5 = 11",
  a2: "Simplify: (2^3) x (2^2)",
  a3: "Find the area of a circle with radius 4cm (π = 3.14)",
  a4: "If f(x) = 2x, find f(-3)",
  a5: "Simplify: 3(2x + 1)",
  a6: "Find the range: 2, 4, 6, 8, 10",
  a7: "A book costs $15. If sales tax is 8%, how much will you pay?",
  a8: "Find the midpoint: (2,4), (6,8)",
  a9: "If sin(x) = 3/5, find cos(x)",
  a10: "Solve: x^2 + 4x + 4 = 0",
};

document.getElementById("a1").textContent = product.a1;
document.getElementById("q1").textContent = product.q1;
document.getElementById("q2").textContent = product.q2;

document.getElementById("a2").textContent = product.a2;
document.getElementById("q3").textContent = product.q3;
document.getElementById("q4").textContent = product.q4;

document.getElementById("a3").textContent = product.a3;
document.getElementById("q5").textContent = product.q5;
document.getElementById("q6").textContent = product.q6;

document.getElementById("a4").textContent = product.a4;
document.getElementById("q7").textContent = product.q7;
document.getElementById("q8").textContent = product.q8;

document.getElementById("a5").textContent = product.a5;
document.getElementById("q9").textContent = product.q9;
document.getElementById("q10").textContent = product.q10;

document.getElementById("a6").textContent = product.a6;
document.getElementById("q11").textContent = product.q11;
document.getElementById("q12").textContent = product.q12;

document.getElementById("a7").textContent = product.a7;
document.getElementById("q13").textContent = product.q13;
document.getElementById("q14").textContent = product.q14;

document.getElementById("a8").textContent = product.a8;
document.getElementById("q15").textContent = product.q15;
document.getElementById("q16").textContent = product.q16;

document.getElementById("a9").textContent = product.a9;
document.getElementById("q17").textContent = product.q17;
document.getElementById("q18").textContent = product.q18;

document.getElementById("a10").textContent = product.a10;
document.getElementById("q19").textContent = product.q19;
document.getElementById("q20").textContent = product.q20;
