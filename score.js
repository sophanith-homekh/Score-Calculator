let button = document.getElementById("checkBtn");

button.addEventListener("click", function() {
    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    let score3 = document.getElementById("score3").value;
    let sum = score1 + score2 + score3

    if (sum >= 100){
        alert('Your are grade A')
    }
    else if(sum >= 70){
        alert('you are grade b')
    }
    else{
        alert('you are fail in the exam')
    }
});