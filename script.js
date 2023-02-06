const allBtns = document.querySelectorAll(".btn");
const inp = document.querySelector(".screenTxt");
for (let btn of allBtns) {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);
    inp.value += e.target.textContent;
  });
}
