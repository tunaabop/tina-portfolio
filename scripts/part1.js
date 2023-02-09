function logAlert(event){
    event.preventDefault();
    alert("This is an alert");
}
function logConfirm(event){
    event.preventDefault();
    var result = window.confirm('Do you confirm this?');
    console.log(result);
}
function logPrompt(event){
    event.preventDefault();
    var result = window.prompt("What is your name?");
    console.log(result);
}
function logSafeprompt(event){
    event.preventDefault();
    var result = window.prompt("What is your name?");
    let clean = DOMPurify.sanitize(result);
}
function addAlertListener(){
    const alert = document.getElementById("alert");
    alert.addEventListener('click', logAlert);
}
function addConfirmListener(){
    const alert = document.getElementById("confirm");
    confirm.addEventListener('click', logConfirm);
}
function addPromptListener(){
    const prompt = document.getElementById("prompt");
    prompt.addEventListener('click', logPrompt);
}
function addSafepromptListener(){
    const sprompt = document.getElementById("safeprompt");
    sprompt.addEventListener('click', logSafeprompt);
}
document.addEventListener('DOMContentLoaded', addAlertListener);
document.addEventListener('DOMContentLoaded', addConfirmListener);
document.addEventListener('DOMContentLoaded', addPromptListener);