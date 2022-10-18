// DRAG & DROP SCRIPT
const practiceToDrag = document.querySelectorAll(".intr_four_list_todrag")
const practiceToDrop = document.querySelectorAll(".intr_four_list_todrop")

practiceToDrag.forEach((elem) => {
    elem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("answer", event.target.id)
    })
})

practiceToDrop.forEach((elem) => {
    this.dragValidation(elem)
})

function dragValidation(elem) {
    elem.addEventListener("dragover", (event) => {
        event.preventDefault()
    })
    elem.addEventListener("drop", (event) => {
        event.preventDefault()
        const answer = event.dataTransfer.getData("answer")
        const correctAnswer = event.currentTarget.getAttribute("data-ans")
        if (answer === correctAnswer) {
            document.getElementById(answer).querySelector('.intr_four_list_reslbl').innerHTML = '<span class="material-icons fs-1" style="position: absolute;">verified</span>';
            document.getElementById(answer).querySelector('.intr_four_list_reslbl').style.color = '#198754'
        } else {
            document.getElementById(answer).querySelector('.intr_four_list_reslbl').innerHTML = '<span class="material-icons fs-1" style="position: absolute;">cancel</span>'
            document.getElementById(answer).querySelector('.intr_four_list_reslbl').style.color = '#dc3545'
        }
    })
}