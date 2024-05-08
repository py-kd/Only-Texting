document.title="Drag & Drop Functionality"

let items = document.getElementsByClassName("item");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let item of items) {
      item.addEventListener("dragstart", (e)=>{
            let selected = e.target;
            
            rightBox.addEventListener("dragover", (e)=>{
                  e.preventDefault();
            });
            
            rightBox.addEventListener("drop", (e)=>{
                  rightBox.appendChild(selected);
                  selected=null;
            });
            
            leftBox.addEventListener("dragover", (e)=>{
                  e.preventDefault();
            });
            
            leftBox.addEventListener("drop", (e)=>{
                  leftBox.appendChild(selected);
                  selected=null;
            });

      });
}