const allBtns = document.querySelectorAll(".btn");
const inp = document.querySelector(".screenTxt");
let memVal = [];
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
    if (inp.value[0] === "s") {
      let sinVal = inp.value.slice(3);
      sin(sinVal);
    }
    if (inp.value[0] === "c") {
      let cosVal = inp.value.slice(3);
      cos(cosVal);
    }
    if (inp.value[0] === "t") {
      let tanVal = inp.value.slice(3);
      tan(tanVal);
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
    inp.value = "sin";
  }
  if (selectedTrig === "cos") {
    inp.value = "cos";
  }
  if (selectedTrig === "tan") {
    inp.value = "tan";
  }
}
function sin(val) {
  inp.value = Math.sin(val);
}
function cos(val) {
  inp.value = Math.cos(val);
}
function tan(val) {
  inp.value = Math.tan(val);
}
function pi() {
  inp.value += 3.14159265359;
}
function e() {
  inp.value += 2.71828182846;
}
function secondOptions() {
  let x3 = document.getElementById("xSquare");
  x3.innerHTML = "x<sup>3</sup>";
  let cubeRoot = document.getElementById("sqrRootX");
  cubeRoot.innerHTML = "<sup>3</sup>√x";
  let x10 = document.getElementById("tenToX");
  x10.innerHTML = "x<sup>10</sup>";
}
function pow2or3() {
  let currVal = document.getElementById("xSquare");
  //   console.log();
  let currValTxt = currVal.textContent;
  if (currValTxt === "x2") {
    inp.value = Math.pow(inp.value, 2);
  }
  if (currValTxt === "x3") {
    inp.value = Math.pow(inp.value, 3);
  }
}
function root2or3() {
  let currVal = document.getElementById("sqrRootX");

  let currValTxt = currVal.textContent;
  console.log(currValTxt);
  if (currValTxt === "√x") {
    // inp.value += "√";
    // let rootVal=inp.value.replace('√','')
    inp.value = Math.sqrt(eval(inp.value));
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
  inp.value = Math.log(eval(inp.value));
}
function log() {
  inp.value = Math.log10(eval(inp.value));
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

function ms() {
  localStorage.setItem("ms", inp.value);
  inp.value = "";
}
function mc() {
  localStorage.removeItem("ms");
  inp.value = "";
}
function mr() {
  inp.value = +localStorage.getItem("ms");
}
function mPlus() {
  let msVal = Number(localStorage.getItem("ms"));
  msVal += Number(inp.value);
  localStorage.setItem("ms", msVal);
}
function mMinus() {
  let msVal = Number(localStorage.getItem("ms"));
  let mMinus = msVal - Number(inp.value);
  localStorage.setItem("ms", Math.abs(mMinus));
}
