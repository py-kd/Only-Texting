let container = document.querySelector(".container");
console.log(container);

let para = document.createElement("p");
console.log(para);

let val = 0;
val = localStorage.getItem("counter");
para.innerText = val;

container.appendChild(para);
// container.append(para);

setInterval(() => {
      val++;
      localStorage.setItem("counter", val);
      para.innerText = val;
}, 1000);