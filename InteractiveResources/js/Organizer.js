
$(document).ready(function () {
     /* draggable element */
const items = document.querySelectorAll('.item');

items.forEach(function (item) {
  item.addEventListener('dragstart', dragStart);
//   item.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    e.dataTransfer.setData('text',e.srcElement.id );
    setTimeout(() => {
        // e.target.classList.add('backgrounddrop');   
    }, 0);
}


 const boxes = document.querySelectorAll('.box');

     boxes.forEach(box => {
     box.addEventListener('dragenter', dragEnter)
     box.addEventListener('dragover', dragOver);
     box.addEventListener('dragleave', dragLeave);
     box.addEventListener('drop', drop);
     });

     function dragEnter(e) {
            e.preventDefault();
     }

     function dragOver(e) {
         
      e.preventDefault();     
            
     }

     function dragLeave(e) {
            e.preventDefault(); 
      
               
           e.dataTransfer.setData('text',e.srcElement.id );
           e.target.classList.remove('true');
           
     }

     function drop(e) {
          
          if(e.srcElement.classList.length <= 4){
               const id = e.dataTransfer.getData('text/plain');
               
               const draggable = document.getElementById(id);

               e.target.appendChild(draggable);
               
               draggable.classList.remove('hide');

               var itemset = e.srcElement.firstChild.dataset.set;
               var dropset = e.srcElement.dataset.set;

               if(itemset != dropset){
                   draggable.classList.add('wrong');   
               }else{
                    draggable.classList.remove('wrong');
               }
                         
               


          }else{
               const id = e.dataTransfer.getData('text/plain');
               const draggable = document.getElementById(id);
               draggable.classList.remove('hide');
          }
         
     }
});