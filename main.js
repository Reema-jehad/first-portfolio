let switcher = document.querySelectorAll(".project ul li");
let boxes = document.querySelectorAll(".project .boxes .box");

switcher.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageBoxes);
});

function removeActive() {
  switcher.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageBoxes() {
  boxes.forEach((box) => {
    box.style.display = "none";
  });
  // console.log(document.querySelectorAll(this.dataset.lang))
  document.querySelectorAll(this.dataset.lang).forEach((el) => {
    el.style.display = "block";
  });
}


gsap.from(".landing img", 1.5, { opacity: 0, y: 300, delay: 0.3 });
gsap.from(".landing svg", 1.5, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".landing i", 1.5, { opacity: 0, y: 300, delay: 1.4 });
gsap.from(".landing .text", 1.5, { opacity: 0, y: -100, delay: 1.4 });
