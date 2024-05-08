let controlArrow = document.getElementsByClassName("open");
console.log(controlArrow);

for (const arrow of controlArrow) {      
      console.log(arrow);

      arrow.addEventListener("click", ()=> {
            arrow.classList.toggle("open");
            arrow.classList.add("close");
      });
}