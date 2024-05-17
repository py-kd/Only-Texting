let body = document.querySelector('body');
console.log(body);

let div = document.createElement('div');
div.classList.add('container');
div.innerText = "Chaman";
console.log(div);

// body.appendChild(div);
body.append(div);

div.style.backgroundColor = "red";
div.style.padding = "30px";
div.style.borderRadius = "10px";
div.style.color = "white";
div.style.fontSize = "22px";
div.style.minHeight = "30px";
div.style.minWidth = "80px";
div.style.overflow = "scroll";