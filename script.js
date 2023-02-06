const allBtns = document.querySelectorAll(".btn");
const inp = document.querySelector(".screenTxt");
let toggle = 0;
let memToggle = 0;
for (let btn of allBtns) {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);
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
  });
}
function resultant() {
  try {
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
      let finalLnRes = lnOpr();
      inp.value = finalLnRes;
    }
    inp.value = eval(inp.value);
  } catch {
    inp.value = "Invalid Input";
  }
}
function ac() {
  inp.value = "";
}
function bspc() {
  inp.value = inp.value.slice(0, inp.value.length - 1);
}
function trignometric() {
  let trigContent = document.getElementById("trigs");
  let selectedTrig = trigContent.value;
  //   console.log(selectedTrig);
  if (selectedTrig === "sin") {
    inp.value += "sin";
  }
  if (selectedTrig === "cos") {
    inp.value += "cos";
  }
  if (selectedTrig === "tan") {
    inp.value += "tan";
  }
}
function sinRes(val) {
  return Math.sin(val);
}
function cosRes(val) {
  return Math.cos(val);
}
function tanRes(val) {
  return Math.tan(val);
}
function pi() {
  inp.value += 3.14159265359;
}
function e() {
  inp.value += 2.71828182846;
}
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
function sqrR(val) {
  return Math.sqrt(val);
}
function logRes(val) {
  return Math.log10(val);
}
function lnRes(val) {
  return Math.log(val);
}
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
function xPowY() {
  inp.value = Math.pow(eval(inp.value), eval(inp.value));
}
function ln() {
  inp.value += "ln";
  // inp.value = Math.log(eval(inp.value));
}
function log() {
  inp.value += "log";
  // inp.value = Math.log10(eval(inp.value));
}
function oneByX() {
  inp.value = 1 / eval(inp.value);
}
function modX() {
  inp.value = Math.abs(eval(inp.value));
}
function exp() {
  inp.value = Math.exp(eval(inp.value));
}
function modulo() {
  inp.value += "%";
}
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
function plusMinus() {
  if (inp.value[0] === "-") {
    inp.value = inp.value.slice(1);
  } else {
    inp.value = "-" + inp.value;
  }
}
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

function mc() {
  if (memToggle === 1) {
    localStorage.removeItem("ms");
    inp.value = "";
  }
}
function mr() {
  if (memToggle === 1) {
    inp.value = +localStorage.getItem("ms");
  }
}
function ms() {
  hightlightMem();
  localStorage.setItem("ms", inp.value);
  inp.value = "";
}
function mPlus() {
  hightlightMem();
  let msVal = Number(localStorage.getItem("ms"));
  msVal += Number(inp.value);
  localStorage.setItem("ms", msVal);
}
function mMinus() {
  hightlightMem();
  let msVal = Number(localStorage.getItem("ms"));
  let mMinus = msVal - Number(inp.value);
  localStorage.setItem("ms", Math.abs(mMinus));
}
function hightlightMem() {
  memToggle = 1;
  if (memToggle === 1) {
    let bothBtns = document.querySelectorAll(".lightM");
    for (let btn of bothBtns) {
      btn.classList.remove("lightM");
    }
  }
}

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
  let count = 3;
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

      cutStrRes = lnRes(cutStr);
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
