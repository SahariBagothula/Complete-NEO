var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome",userName,".How you are you doing? ");
console.log(userName,"this game is about the series MONEY HEIST");
console.log("Let's begin!");
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer==answer){
    console.log("You are right",userName);
    score = score+1;
  }
  else{
     console.log("You are wrong",userName);
  }
  console.log("Your current score is : ",score);
  console.log("--------");
}
var questions = [
  {
    question : "Question 01 : How many seasons does the series have? ",
  answer : 5
  },
  {
  question : "Question 02 : How many robbers were present in the team exclusinf the professor? ",
  answer : 8
  },
  {
  question : "Question 03 : What is professor's brother name in the series? ",
  answer : "Berlin"
  },
  {
  question : "Question 04 : What is the name of professor in the series? ",
  answer : "Sergio"
  },
  {
  question : "Question 05 : How many of the original robbers were alive after heist 2? ",
  answer : 5
  }
];
for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(userName,"your final score is : ",score);
console.log("Thank's for the participation",userName,"hope you enjoyed it!")
