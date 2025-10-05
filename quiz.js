function checkAnswer() {
    // Function body
    let correctAnswer = "4";
    userAnswer = document.querySelector("input[name='quiz']:checked");
    let feedback = document.getElementById("feedback");


    if (!userAnswer) {
        feedback.innerHTML = "Please select an answer!"
    }else if (userAnswer.value  !== correctAnswer) {
        feedback.innerHTML = "That's incorrect. Try again!"
    } else {
        feedback.innerHTML = "Correct! Well done.";
    }

}


let submit = document.getElementById("submit-answer");
submit.addEventListener("click", checkAnswer)