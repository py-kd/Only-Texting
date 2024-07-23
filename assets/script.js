const mylist = document.querySelector('.mylist');
const listItem = document.querySelector('.item1');

mylist.addEventListener('click', (e) => {
      // console.log(`i am clicked`);
      // console.log(e);
      // console.log(e.timeStamp);
      // console.log(e.bubbles);
      // console.log(e.CAPTURING_PHASE);
      // console.log(e.target);
      console.log(e.target.tagName);
      console.log(e.target.id);
      // console.log(e.target.parentNode);
      // console.log(e.currentTarget);
      // console.log(e.type);
      // console.log(e.defaultPrevented);
      // console.log(e.toElement);
      // console.log(e.srcElement);      
      // console.log(`CLIENT -> from left:: ${e.clientX} from top:: ${e.clientY}`);
      // console.log(`SCREEN -> from left:: ${e.screenX} from top:: ${e.screenY}`);
      // console.log(`PAGE -> from left:: ${e.pageX} from top:: ${e.pageY}`);
      // console.log(`OFFSET -> from left:: ${e.offsetX} from top:: ${e.offsetY}`);
      // console.log(`TILT -> from left:: ${e.tiltX} from top:: ${e.tiltY}`);
      // console.log(`WINDOW -> from left:: ${e.tiltX} from top:: ${e.tiltY}`);

      // console.log(mylist.attributes); 
      // console.log(mylist.attributes[0]);

      // console.log(`container clicked`);
      // e.stopPropagation();

      e.target.parentNode.removeChild(e.target);
}, false);

// listItem.addEventListener('click',(e) => {
//       console.log(`item clicked`);
//       e.stopPropagation();
//       e.stopPropagation();
// }, true);

document.addEventListener('DOMContentLoaded', (e) => {
      console.log(`dom loaded`);
});
document.addEventListener('', (e) => {
      console.log(`dom resize`);
});