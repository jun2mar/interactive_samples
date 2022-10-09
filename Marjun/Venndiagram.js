const vennBtn = document.querySelectorAll(".vennBtns button");
const vennGroups = document.querySelectorAll(".vennGroups");

let drag;
vennBtn.forEach( button => {
    button.addEventListener("dragstart", (event) => {
        drag = event.target;
    }, false);
})

vennGroups.forEach( box => {

    box.addEventListener("dragenter" , (event) => {
        event.target.classList.add("enter");
    }, false)

    box.addEventListener("dragover" , (event) => {
        event.preventDefault();
    }, false)

    box.addEventListener("drop" , (event) => {

        event.preventDefault();

        const checkAns = event.target.parentNode.getAttribute("data-ans");
        console.log(checkAns);
        const arrAns = checkAns.split(",");

        const newBtn = document.createElement("button");

        newBtn.classList.add("btn")
        newBtn.innerText = drag.innerHTML

        if(arrAns.includes(drag.innerHTML)){
            newBtn.classList.add("correct")
            event.target.parentNode.appendChild(newBtn);

            event.target.parentNode.classList.remove("enter");
            venndrag.classList.add("disabled");

        } else {
            newBtn.classList.add("incorrect")
            event.target.parentNode.appendChild(newBtn);

            event.target.parentNode.classList.remove("enter");

            setTimeout( () => {
                const removeButton = document.querySelector(".incorrect");
                removeButton.remove()
            }, 2000);
        }

    }, false)

})