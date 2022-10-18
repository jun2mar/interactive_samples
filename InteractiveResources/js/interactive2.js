const practiceSelect = document.querySelectorAll(".intr_two_box_ans")
practiceSelect.forEach( clicks => {
    clicks.addEventListener("click", (event) => {
        const val = event.target.getAttribute("data-ans")
        if(val != ""){
            event.target.classList.toggle("correct")
        }

        if(val === ""){
            event.target.classList.toggle("incorrect")
        }
    })
})