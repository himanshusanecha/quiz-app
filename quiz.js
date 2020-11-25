var questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
}, {
    question: "What is the young of Bufallo called?",
    choices: ["calf", "baby", "pup","cow"],
    correctAnswer: 0
}, {
    question: "What a baby Aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}, {
    question: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
}, {
    question: "What is a baby Hamster called?",
    choices: ["pup", "chick", "infant", "billy"],
    correctAnswer: 0	
	
}, {
    question: "What is a baby Hawk called?",
    choices: ["hawklett", "pup", "larva", "eyas"],
    correctAnswer: 3	
}, {
    question: "What is a baby grasshopper called?",
    choices: ["hopper", "nymph", "stick", "pup"],
    correctAnswer: 1
}, {
    question: "What is a baby Kangaroo called?",
    choices: ["kinga", "joey", "calf", "baby"],
    correctAnswer: 1

}, {
    question: "What is a baby Whale called?",
    choices: ["whala", "cub", "grub", "infant"],
    correctAnswer: 1

}, {
    question: "What is a baby Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctAnswer: 0

	}, {
    question: "What is a baby Bear Called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctAnswer: 0
}];
var currentquestion = 0;
var correctanswer = 0;
var quizover = false;

$(document).ready(function() {
    displaycurrentquestion();
    $(this).find(".quizmessage").hide();
    $(this).find("#nextbutton").on("click",function(){
        if(!quizover){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                alert("Please select an answer");
                $(document).find("quizmessage").show();
            } else {
                $(document).find(".quizmessage").hide();
                if(value == questions[currentquestion].correctAnswer){
                    correctanswer++;
                }
                currentquestion++;
                if(currentquestion < questions.length){
                    displaycurrentquestion();
                } else {
                    displayscore();
                    $(document).find("#nextbutton").text("Re-attempt");
                    quizover = true;
                }
            }
        } else {
            quizover = false;
            $(document).find("#nextbutton").text("Next Question");
            resetquiz();
            displaycurrentquestion();
            hidescore();
        }
    });
});
function displaycurrentquestion() {

    console.log("In display current Question");

    var question = questions[currentquestion].question;
    var questionClass = $(document).find(".question");
    var choiceList = $(document).find(".choicelist");
    var numChoices = questions[currentquestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentquestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetquiz() {
    currentquestion = 0;
    correctanswers = 0;
    hideScore();
}

function displayscore() {
    $(document).find(".result").text("You scored: " + correctanswer + " out of: " + questions.length);
    $(document).find(".result").show();
}

function hidescore() {
    $(document).find(".result").hide();
}