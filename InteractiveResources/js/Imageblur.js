
$(document).ready(function () {
     /* draggable element */

const items = document.querySelectorAll('.itemimage');
var iditem = null;
items.forEach(function (item) {
  item.addEventListener('dragstart', dragStart);
//   item.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    e.dataTransfer.setData('text',e.srcElement.id );
    iditem = e.srcElement.id;
    setTimeout(() => {
        e.target.classList.remove('shake-image');        
    }, 0);
}

 const boxes = document.querySelectorAll('.boximage');

     boxes.forEach(box => {
     box.addEventListener('dragenter', dragEnter)
     box.addEventListener('dragover', dragOver);
     box.addEventListener('dragleave', dragLeave);
     box.addEventListener('drop', drop);
     });

     function dragEnter(e) {
          e.preventDefault(e);
     }

     function dragOver(e) {
          e.preventDefault(e);     
     }

     function dragLeave(e) {
          e.preventDefault(e); 
          e.dataTransfer.setData('text',e.srcElement.id );
          e.target.classList.remove('true');
     }

     function drop(e) {
          //     e.preventDefault(); 
               const el = document.querySelector("#"+iditem);
               var itemset = el.dataset.set;
               var dropset = e.srcElement.dataset.set;

               // console.log(itemset)
               // console.log(dropset)
            
               if(itemset == dropset){
               const id = e.dataTransfer.getData('text/plain');
          
               const draggable = document.getElementById(id);

               e.target.appendChild(draggable);
                  
                 const itemid = e.srcElement.id;
                 const drop = document.getElementById(itemid);
                 drop.classList.remove('image-drop');   
                 drop.classList.add('correct-image');
               }else{
                    const el = document.querySelector("#"+iditem);
                    el.classList.add('shake-image');
               }
     }
});
