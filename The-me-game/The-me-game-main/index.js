var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome",userName,"do you know me? ");
console.log("By this quiz let us understand how much do you know me? ")
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer==answer){
    console.log("You are right");
    score = score+1;
  }
  else{
     console.log("Oops you are wrong!");
  }
  console.log("Your current score is : ",score);
  console.log("*****");
}
var questions = [
  {
    question : "Where do I live? ",
  answer : "Hyderabad"
  },
  {
  question : "What is my favourite animal? ",
  answer : "Dog"
  }
  ,
  {
  question : "Where do I work? ",
  answer : "Capgemini"
  }
  ,
  {
  question : "What is my favourite colour? ",
  answer : "Red"
  },
  {
  question : "What is my favourite food item? ",
  answer : "Chicken drumsticks"
  }
];
for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Your final score is : ",score);
if(score<2){
  console.log("You have to know me better",username);
}
else if(score==3){
  console.log("You know quite a few things about me",userName);