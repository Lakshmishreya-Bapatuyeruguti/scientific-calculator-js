//Selecting all buttons
const allBtns = document.querySelectorAll(".btn");
const inp = document.querySelector(".screenTxt");
let countP = 0;
let toggle = 0;
let memToggle = 0;
let degToggle = 0;
let str = "";
//Adding event listener on button click
for (let btn of allBtns) {
  btn.addEventListener("click", (e) => {
    let txtOnBtn = e.target.textContent;
    if (txtOnBtn === "÷") {
      txtOnBtn = "/";
    }
    if (txtOnBtn === "X") {
      txtOnBtn = "*";
    }
    if (txtOnBtn !== "=") {
      inp.value += txtOnBtn;
    }
    //check condition for consecutive oprators
    if (inp.value.includes("++")) {
      inp.value = inp.value.slice(0, inp.value.length - 1);
    }
    if (inp.value.includes("--")) {
      inp.value = inp.value.slice(0, inp.value.length - 1);
    }
    if (inp.value.includes("//")) {
      inp.value = inp.value.slice(0, inp.value.length - 1);
    }
    if (inp.value.includes("**")) {
      inp.value = inp.value.slice(0, inp.value.length - 1);
    }
    if (inp.value.includes("+-")) {
      let last = inp.value[inp.value.length - 1];
      let strToArr = inp.value.split("");
      let s = strToArr.length;
      strToArr.splice(s - 2, 2, last);
      console.log(strToArr);
      let finalRes = strToArr.join("");
      inp.value = finalRes;
    }
    if (inp.value.includes("+/")) {
      let last = inp.value[inp.value.length - 1];
      let strToArr = inp.value.split("");
      let s = strToArr.length;
      strToArr.splice(s - 2, 2, last);
      console.log(strToArr);
      let finalRes = strToArr.join("");
      inp.value = finalRes;
    }
    if (inp.value.includes("+*")) {
      let last = inp.value[inp.value.length - 1];
      let strToArr = inp.value.split("");
      let s = strToArr.length;
      strToArr.splice(s - 2, 2, last);
      console.log(strToArr);
      let finalRes = strToArr.join("");
      inp.value = finalRes;
    }
    if (inp.value.includes(".")) {
      if (inp.value.includes("..")) {
        let last = inp.value[inp.value.length - 1];
        let strToArr = inp.value.split("");
        let s = strToArr.length;
        strToArr.splice(s - 2, 2, last);
        console.log(strToArr);
        let finalRes = strToArr.join("");
        inp.value = finalRes;
      }
    }
  });
}
//degree function
function deg() {
  if (degToggle === 0) {
    document.getElementById("degBtn").textContent = "DEG";
    degToggle = 1;
  } else {
    document.getElementById("degBtn").textContent = "RAD";
    degToggle = 0;
  }
}
// Equals Function
function resultant() {
  try {
    if (inp.value === "") {
      inp.placeholder = "Enter Numbers";
    }
    if (inp.value.includes("sin")) {
      let finalSinVal = sinOpr();
      inp.value = finalSinVal;
    }
    if (inp.value.includes("cos")) {
      let finalCosVal = cosOpr();
      inp.value = finalCosVal;
    }
    if (inp.value.includes("tan")) {
      let finalTanVal = tanOpr();
      inp.value = finalTanVal;
    }
    if (inp.value.includes("√")) {
      let finalSrRes = sqrRootOpr();
      inp.value = finalSrRes;
    }
    if (inp.value.includes("log")) {
      let finalLogRes = logOpr();
      inp.value = finalLogRes;
    }
    if (inp.value.includes("ln")) {
      if (inp.value.includes("2.71828182846")) {
        inp.value = 1;
      } else {
        let finalLnRes = lnOpr();
        inp.value = finalLnRes;
      }
    }
    inp.value = eval(inp.value);
  } catch {
    inp.value = "Invalid Input";
  }
}
// Clear All Function
function ac() {
  inp.value = "";
}
//Backspace Function
function bspc() {
  inp.value = inp.value.slice(0, inp.value.length - 1);
}
// Trignometric
function trignometric() {
  let trigContent = document.getElementById("trigs");
  let selectedTrig = trigContent.value;
  //   console.log(selectedTrig);
  if (selectedTrig === "sin") {
    if (inp.value.includes("+", "-", "*", "/")) {
      inp.value += "sin";
    } else {
      inp.value = "sin";
    }
  }
  if (selectedTrig === "cos") {
    if (inp.value.includes("+", "-", "*", "/")) {
      inp.value += "cos";
    } else {
      inp.value = "cos";
    }
  }
  if (selectedTrig === "tan") {
    if (inp.value.includes("+", "-", "*", "/")) {
      inp.value += "tan";
    } else {
      inp.value = "tan";
    }
  }
}
//Sin
function sinRes(val) {
  if (degToggle === 1) {
    let x = Math.sin((val * Math.PI) / 180);
    return x.toFixed(2);
  }
  return Math.sin(val);
}
//cos
function cosRes(val) {
  if (degToggle === 1) {
    let x = Math.cos((val * Math.PI) / 180);
    return x.toFixed(2);
  }
  return Math.cos(val);
}
//tan
function tanRes(val) {
  if (degToggle === 1) {
    let x = Math.tan((val * Math.PI) / 180);
    return x.toFixed(2);
  }
  return Math.tan(val);
}
//Pi function
function pi() {
  inp.value += 3.14159265359;
}
// e function
function e() {
  inp.value += 2.71828182846;
}
//2nd function
function secondOptions() {
  if (toggle === 0) {
    let x3 = document.getElementById("xSquare");
    x3.innerHTML = "x<sup>3</sup>";
    let cubeRoot = document.getElementById("sqrRootX");
    cubeRoot.innerHTML = "<sup>3</sup>√x";
    let x10 = document.getElementById("tenToX");
    x10.innerHTML = "x<sup>10</sup>";
    toggle = 1;
  } else {
    let x3 = document.getElementById("xSquare");
    x3.innerHTML = "x<sup>2</sup>";
    let cubeRoot = document.getElementById("sqrRootX");
    cubeRoot.innerHTML = "√x";
    let x10 = document.getElementById("tenToX");
    x10.innerHTML = "10<sup>x</sup>";
    toggle = 0;
  }
}
//Square or cube function
function pow2or3() {
  let currVal = document.getElementById("xSquare");
  //   console.log();
  let currValTxt = currVal.textContent;
  if (currValTxt === "x2") {
    inp.value = Math.pow(eval(inp.value), 2);
  }
  if (currValTxt === "x3") {
    inp.value = Math.pow(eval(inp.value), 3);
  }
}
//square root function
function sqrR(val) {
  return Math.sqrt(val);
}
//log function
function logRes(val) {
  return Math.log10(val);
}
//ln function
function lnRes(val) {
  return Math.log(val);
}
// sqr root or cube root function
function root2or3() {
  let currVal = document.getElementById("sqrRootX");

  let currValTxt = currVal.textContent;
  console.log(currValTxt);
  if (currValTxt === "√x") {
    inp.value += "√";
  }
  if (currValTxt === "3√x") {
    console.log("shfgd");
    inp.value = Math.cbrt(eval(inp.value));
  }
}
//pow 10 function
function pow10orX() {
  let currVal = document.getElementById("tenToX");
  let currValTxt = currVal.textContent;
  if (currValTxt === "10x") {
    inp.value = Math.pow(10, inp.value);
  }
  if (currValTxt === "x10") {
    inp.value = Math.pow(inp.value, 10);
  }
}
//x pow y function
function xPowY() {
  inp.value = Math.pow(eval(inp.value), eval(inp.value));
}
//Printing ln
function ln() {
  if (inp.value.includes("+", "-", "*", "/")) {
    inp.value += "ln";
  } else {
    inp.value = "ln";
  }
}
//Printing log
function log() {
  if (inp.value.includes("+", "-", "*", "/")) {
    inp.value += "log";
  } else {
    inp.value = "log";
  }
}
//one By X
function oneByX() {
  if (inp.value === "") {
    inp.value = "0";
  } else {
    inp.value = 1 / eval(inp.value);
  }
}
//Mod x
function modX() {
  if (inp.value === "") {
    inp.value = "0 ";
  } else {
    inp.value = Math.abs(eval(inp.value));
  }
}
//exp function
function exp() {
  if (inp.value === "") {
    inp.value = "0 ";
  } else {
    inp.value = Math.exp(eval(inp.value));
  }
}
//modulo function
function modulo() {
  inp.value += "%";
}
//factorial function
function fact() {
  const factNum = eval(inp.value);
  inp.value = factorial(factNum);
}
function factorial(n) {
  if (n < 0) {
    return "Enter positive value";
  }
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
//PLUS OR MINUS
function plusMinus() {
  if (inp.value[0] === "-") {
    inp.value = inp.value.slice(1);
  } else {
    inp.value = "-" + inp.value;
  }
}
//fUNCTION DROPDOWN FUNCTIONS
function functionOptions() {
  let funContent = document.getElementById("funcs");
  let selectedFun = funContent.value;
  //   console.log(selectedTrig);
  if (selectedFun === "rand") {
    inp.value = Math.random() * 1000;
  }
  if (selectedFun === "floor") {
    inp.value = Math.floor(inp.value);
  }
  if (selectedFun === "ceil") {
    inp.value = Math.ceil(inp.value);
  }
}
//MC
function mc() {
  if (memToggle === 1) {
    localStorage.removeItem("ms");
    inp.value = "";
    memToggle = 0;
    let bothBtns = document.querySelectorAll(".m2");
    for (let btn of bothBtns) {
      btn.classList.add("lightM");
    }
  }
}
//MR
function mr() {
  if (memToggle === 1) {
    inp.value = +localStorage.getItem("ms");
  }
}
//MS
function ms() {
  hightlightMem();
  localStorage.setItem("ms", inp.value);
  inp.value = "";
}
//M+
function mPlus() {
  hightlightMem();
  let msVal = Number(localStorage.getItem("ms"));
  msVal += Number(inp.value);
  localStorage.setItem("ms", msVal);
}
//M-
function mMinus() {
  hightlightMem();
  let msVal = Number(localStorage.getItem("ms"));
  let mMinus = msVal - Number(inp.value);
  localStorage.setItem("ms", Math.abs(mMinus));
}
//Enabling MR nad MC
function hightlightMem() {
  memToggle = 1;
  if (memToggle === 1) {
    let bothBtns = document.querySelectorAll(".lightM");
    for (let btn of bothBtns) {
      btn.classList.remove("lightM");
    }
  }
}
// Functions to parse squareroots, trigonometric and log,ln
function sqrRootOpr() {
  let cutStr = "";
  let cutStrRes;
  let count = 1;
  let idxPos = 0;
  for (let i = 0; i < inp.value.length; i++) {
    if (inp.value[i] === "√") {
      idxPos = i;
      for (let j = i + 1; j < inp.value.length; j++) {
        if (
          inp.value[j] === "+" ||
          inp.value[j] === "-" ||
          inp.value[j] === "*" ||
          inp.value[j] === "/"
        ) {
          break;
        } else if (Number(inp.value[j]) >= 0 && Number(inp.value[j]) <= 9) {
          cutStr += inp.value[j];
          count++;
        }
      }

      cutStrRes = sqrR(cutStr);
    }
  }

  let strToArr = inp.value.split("");
  strToArr.splice(idxPos, count);
  strToArr.splice(idxPos, 0, cutStrRes + "");
  strToArr = strToArr.join("");
  return strToArr;
}

function logOpr() {
  let cutStr = "";
  let cutStrRes;
  let count = 3;
  let idxPos = 0;
  for (let i = 0; i < inp.value.length; i++) {
    if (inp.value[i] === "l") {
      idxPos = i;
      for (let j = i + 3; j < inp.value.length; j++) {
        if (
          inp.value[j] === "+" ||
          inp.value[j] === "-" ||
          inp.value[j] === "*" ||
          inp.value[j] === "/"
        ) {
          break;
        } else if (Number(inp.value[j]) >= 0 && Number(inp.value[j]) <= 9) {
          cutStr += inp.value[j];
          count++;
        }
      }

      cutStrRes = logRes(cutStr);
    }
  }
  console.log(cutStrRes);
  let strToArr = inp.value.split("");
  strToArr.splice(idxPos, count);
  strToArr.splice(idxPos, 0, cutStrRes + "");
  strToArr = strToArr.join("");
  return strToArr;
}

function lnOpr() {
  let cutStr = "";
  let cutStrRes;
  let count = 2;
  let idxPos = 0;
  for (let i = 0; i < inp.value.length; i++) {
    if (inp.value[i] === "l") {
      idxPos = i;
      for (let j = i + 2; j < inp.value.length; j++) {
        if (
          inp.value[j] === "+" ||
          inp.value[j] === "-" ||
          inp.value[j] === "*" ||
          inp.value[j] === "/"
        ) {
          break;
        } else if (Number(inp.value[j]) >= 0 && Number(inp.value[j]) <= 9) {
          cutStr += inp.value[j];
          count++;
        }
      }
      if (inp.value.includes("2.71828182846")) {
        cutStrRes = lnRes(Math.E);
        console.log("sent");
      } else {
        cutStrRes = lnRes(cutStr);
      }
    }
  }
  console.log(cutStrRes);
  let strToArr = inp.value.split("");
  strToArr.splice(idxPos, count);
  strToArr.splice(idxPos, 0, cutStrRes + "");
  strToArr = strToArr.join("");
  return strToArr;
}
function sinOpr() {
  let cutStr = "";
  let cutStrRes;
  let count = 3;
  let idxPos = 0;
  for (let i = 0; i < inp.value.length; i++) {
    if (inp.value[i] === "s") {
      idxPos = i;
      for (let j = i + 3; j < inp.value.length; j++) {
        if (
          inp.value[j] === "+" ||
          inp.value[j] === "-" ||
          inp.value[j] === "*" ||
          inp.value[j] === "/"
        ) {
          break;
        } else if (Number(inp.value[j]) >= 0 && Number(inp.value[j]) <= 9) {
          cutStr += inp.value[j];
          count++;
        }
      }

      cutStrRes = sinRes(cutStr);
    }
  }
  console.log(cutStrRes);
  let strToArr = inp.value.split("");
  strToArr.splice(idxPos, count);
  strToArr.splice(idxPos, 0, cutStrRes + "");
  strToArr = strToArr.join("");
  return strToArr;
}

function cosOpr() {
  let cutStr = "";
  let cutStrRes;
  let count = 3;
  let idxPos = 0;
  for (let i = 0; i < inp.value.length; i++) {
    if (inp.value[i] === "c") {
      idxPos = i;
      for (let j = i + 3; j < inp.value.length; j++) {
        if (
          inp.value[j] === "+" ||
          inp.value[j] === "-" ||
          inp.value[j] === "*" ||
          inp.value[j] === "/"
        ) {
          break;
        } else if (Number(inp.value[j]) >= 0 && Number(inp.value[j]) <= 9) {
          cutStr += inp.value[j];
          count++;
        }
      }

      cutStrRes = cosRes(cutStr);
    }
  }
  console.log(cutStrRes);
  let strToArr = inp.value.split("");
  strToArr.splice(idxPos, count);
  strToArr.splice(idxPos, 0, cutStrRes + "");
  strToArr = strToArr.join("");
  return strToArr;
}

function tanOpr() {
  let cutStr = "";
  let cutStrRes;
  let count = 3;
  let idxPos = 0;
  for (let i = 0; i < inp.value.length; i++) {
    if (inp.value[i] === "t") {
      idxPos = i;
      for (let j = i + 3; j < inp.value.length; j++) {
        if (
          inp.value[j] === "+" ||
          inp.value[j] === "-" ||
          inp.value[j] === "*" ||
          inp.value[j] === "/"
        ) {
          break;
        } else if (Number(inp.value[j]) >= 0 && Number(inp.value[j]) <= 9) {
          cutStr += inp.value[j];
          count++;
        }
      }

      cutStrRes = tanRes(cutStr);
    }
  }
  console.log(cutStrRes);
  let strToArr = inp.value.split("");
  strToArr.splice(idxPos, count);
  strToArr.splice(idxPos, 0, cutStrRes + "");
  strToArr = strToArr.join("");
  return strToArr;
}
