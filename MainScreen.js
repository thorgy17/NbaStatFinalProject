(function() {
    "use strict"

    window.onload = function (){
        let submitBtn = id('SubmitBtn');
        submitBtn.onclick = submitAnswer;
    }


    function submitAnswer(){
        let enterSite = id("Enter")
        let userAnswer = id("input-text");
        if(userAnswer.value == "Lebron" || "Lebron James"){
            enterSite.classList.remove('hidden');
            alert("Correct Answer!")
        }
        else if(userAnswer.value != '') {
            enterSite.classList.remove('hidden');
        }
    }

    function id(id) {
        return document.getElementById(id);
    }
})()