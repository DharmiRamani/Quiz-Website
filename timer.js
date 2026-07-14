let totalTime = 5 * 60;
let timer;

function startTimer() {

    timer = setInterval(function () {

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("time").innerText = minutes + ":" + seconds;

        totalTime--;

        if (totalTime < 0) {
            clearInterval(timer);
            alert("Time up");
            submitQuiz();
        }

    }, 1000);

}

function stopTimer(){
    clearInterval(timer);
}