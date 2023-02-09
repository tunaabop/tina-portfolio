function logSubmit(event){
    // console.log("button was pressed");
    event.preventDefault();
    const formName = document.getElementById("name").value;
    const formEmail = document.getElementById("email").value;
    const formMessage = document.getElementById("message").value;
    const formSubject = document.getElementById("subject").value;
    const formTime = Date();
    outString = "Email from " + formEmail + " (" + formName + ") with subject "
     + formSubject + ": " + formMessage;
     alert("Form submitted on " + formTime);

}


function addSubmitListener(){
    const form = document.getElementById('form')
    form.addEventListener('submit', logSubmit);
}
document.addEventListener('DOMContentLoaded', addSubmitListener);