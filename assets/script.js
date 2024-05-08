let controlArrow = document.getElementsByClassName("arrow");
console.log(controlArrow);

for (const arrow of controlArrow) {      
      console.log(arrow);

      arrow.addEventListener("click", ()=> {
            arrow.classList.toggle("arrowUp");
      });
}