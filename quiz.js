function checkAnswer() {
    // Function body
    let correctAnswer = "4";
    userAnswer = document.querySelector("input[name='quiz']:checked").value;
    let feedback = document.getElementById("feedback");


   
    if (userAnswer === correctAnswer) {
        feedback.innerHTML = "Correct! Well done.";
    } else {
        feedback.innerHTML = "That's incorrect. Try again!";
    }

}


let submit = document.getElementById("submit-answer");
submit.addEventListener("click", checkAnswer)