let container = document.querySelector(".container");
console.log(container);

let para = document.createElement("p");
console.log(para);

let val = 0;
para.innerText = val;

container.appendChild(para);
// container.append(para);

setInterval(() => {
      val++;
      para.innerText = val;
}, 1000);