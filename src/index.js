import "./a.css";

console.log("Hello World from code splitting world");

const bDiv = document.createElement("div");
bDiv.classList.add("b");
const bDivHeading = document.createElement("h1");
bDivHeading.innerText = "Hey there"
bDiv.appendChild(bDivHeading);
document.body.appendChild(bDiv);

const btn = document.createElement("button");
btn.innerText = "Click to load CSS";
btn.addEventListener("click", e => {
  import("./b.css");
})

document.body.appendChild(btn);
