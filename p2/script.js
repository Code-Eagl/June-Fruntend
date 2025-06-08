let img = document.querySelector("img");
let presrc = img.src;

let h2 = document.querySelector("h2");
let prevText = h2.innerText;

img.addEventListener("mouseover", () => {
  img.src = "second.jpg";
  h2.innerText = "Radha Krishna";
  img.style.border = "3px solid blue";
});
img.addEventListener("mouseleave", () => {
  img.src = presrc;
  h2 = prevText;
  img.style.border = "3px solid yellow";
});
