var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTheURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error occurred", error);
    alert("Server is not responding! Please try after sometime");
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTheURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText
    })
    .catch(errorHandler)
}



btnTranslate.addEventListener("click", clickHandler)