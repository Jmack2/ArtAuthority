
/*
All of the code on this page is modified script from:
    *https://www.developphp.com/video/JavaScript/Exam-Application-Programming-Tutorial-Quiz-Online-Test
I changed the content of the 'questions' array to my own questions and answers. I modified renderQuestions() so that it would have an if/else statement that would produce a "results message" at the end of the quiz that corresponded to the users performance on the quiz. In checkAnswer() I added an if/else statement that allowed for two different alert boxes to open up, to let the user know if the current question they answered was correct or incorrect.
*/


var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "Where did the Baroque style start?", "The Catholic Church", "The Markets of Italy", "The Factory", "A" ],
	[ "Is there more than one statue of David?", "Who is this David you speak of?", "There's only one and he is in the Renaissance!", "The Baroque David is actually cooler.", "C" ],
	[ "Who's the guy painting in the painting Las Meninas?", "Diego Velazquez", "Andrea Pozzo", "Gianlorenzo Bernini", "A" ],
	[ "What does Baroque even mean?", "Well, if it ain't broke don't fix it! HAHAHAhahah...I thought it was funny.", "Rough diamond", "Rough Pearl", "C" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
	//	_("test_status").innerHTML = "Test Completed";
         if(correct >= 3){
            test.innerHTML = "You are an Art Authority, indeed!";
            
        }
        else{
            test.innerHTML = "You have got some studying to do!";
        }
    //    test.innerHTML += "<button onclick='#' >Retry</button>"; //added this button
      //  test.innerHTML += "<button onclick='#' >Home</button>"; //added this button
		pos = 0;
		correct = 0;
		return false;
	}
//	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Next</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
        alert("You are right!"); //my doing
	}
    else{
        alert("Look before you leap");
    }
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);