function checkInputs(){
    const answerNumber = event.target.dataset.qs_count
    const triesRemaining = event.target.dataset.error_counter
    const selectorString = `intr_three_list_q${answerNumber}`
    const selectorStringButton = `intr_three_list_btn_q${answerNumber}`
    const selectorStringAnswer = `intr_three_list_ans${answerNumber}`
    const quizTwoAnswer = document.getElementById(selectorString);
    const quizTwoAnswerButton = document.getElementById(selectorStringButton)
    const quizTwoAnswerText = document.getElementById(selectorStringAnswer)
    const answer = quizTwoAnswer.getAttribute('data-ans')
    const userAnswer = quizTwoAnswer.value.toLowerCase()
    const correctAnswer = userAnswer === answer.toLowerCase() ? true : false
    const backToGlow = (quizTwoAnswer, quizTwoAnswerButton) => {
        quizTwoAnswerButton.classList.remove("glow-on-hover-success")
        quizTwoAnswerButton.classList.remove("glow-on-hover-wrong")
        quizTwoAnswerButton.classList.add('glow-on-hover')
        quizTwoAnswerButton.innerText = 'Check'
    }
    if(correctAnswer){
        quizTwoAnswer.classList.remove("is-invalid")
        quizTwoAnswer.classList.add("is-valid")
        quizTwoAnswerButton.innerText = 'Correct!'
        quizTwoAnswerButton.classList.add("glow-on-hover-success")
        quizTwoAnswerButton.classList.remove("glow-on-hover")
        quizTwoAnswerButton.classList.remove('glow-on-hover-wrong')
        quizTwoAnswerText.classList.remove('bg-danger')
        quizTwoAnswerText.classList.add('bg-success')
    } else {
        quizTwoAnswerText.classList.remove('bg-success') 
        quizTwoAnswerText.classList.add('bg-danger')
        quizTwoAnswer.classList.remove("is-valid")
        quizTwoAnswer.classList.add("is-invalid")
        quizTwoAnswerButton.classList.remove("glow-on-hover-success")
        quizTwoAnswerButton.classList.remove("glow-on-hover")
        quizTwoAnswerButton.classList.add('glow-on-hover-wrong')
        quizTwoAnswerButton.innerText = 'Wrong'
        setTimeout(() => backToGlow(quizTwoAnswer,quizTwoAnswerButton), 1500);
        let updateTries = ''
        if(quizTwoAnswerButton.getAttribute('data-error_counter') == 0){
            updateTries = 0;
        } else {
            updateTries = Number(triesRemaining) - 1;
        }
        document.getElementById(selectorStringButton).setAttribute('data-error_counter', updateTries)
        if(quizTwoAnswerButton.getAttribute('data-error_counter') == 0 ){
            quizTwoAnswerText.innerHTML = `Answer: ${quizTwoAnswer.getAttribute('data-ans')}`
            quizTwoAnswerText.classList.remove('hidden')
        }
    }
}