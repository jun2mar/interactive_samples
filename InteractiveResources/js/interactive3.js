function checkInputs(e){
    const parentID = e.target.parentElement.id;

    const quizTwoAnswer = document.getElementById(parentID).querySelector("input");
    const quizTwoAnswerButton = document.getElementById(parentID).querySelector("button");
    const quizTwoAnswerText = document.getElementById(parentID).querySelector("span");

    const answer = quizTwoAnswer.getAttribute('data-ans')
    const userAnswer = quizTwoAnswer.value.toLowerCase()
    const correctAnswer = userAnswer === answer.toLowerCase() ? true : false
    const backToGlow = (quizTwoAnswer, quizTwoAnswerButton) => {
        quizTwoAnswerButton.classList.remove("glow-on-hover-success")
        quizTwoAnswerButton.classList.remove("glow-on-hover-wrong")
        quizTwoAnswerButton.classList.add('glow-on-hover')
        quizTwoAnswerButton.innerText = 'Check'
    }

    if(!e.target.dataset.error_counter){
        quizTwoAnswerButton.setAttribute('data-error_counter', 3);
    }
    const triesRemaining = e.target.dataset.error_counter;

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
        quizTwoAnswerButton.setAttribute('data-error_counter', updateTries)
        if(quizTwoAnswerButton.getAttribute('data-error_counter') == 0 ){
            quizTwoAnswerText.innerHTML = `Answer: ${quizTwoAnswer.getAttribute('data-ans')}`
            quizTwoAnswerText.classList.remove('hidden')
        }
    }
}