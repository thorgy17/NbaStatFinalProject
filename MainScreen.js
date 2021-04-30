(function() {
    "use strict"

    window.onload = function (){
        let submitBtn = id('SubmitBtn');
        submitBtn.onclick = submitAnswer;
    }

    //Simple function that allows users to enter the site upon entering any player name but if Lebron's name is entered
    //User will be prompted that this is the correct answer. Small addition as a mini password page before main site.
    function submitAnswer(){
        let enterSite = id("Enter")
        let userAnswer = id("input-text");
        if(userAnswer.value == "Lebron" || userAnswer.value == "Lebron James"){
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