function validateFormContact() {
    let correct = true;
    var name = nameCheck();
    var email = emailCheck();
    var subject = subjectCheck();
    var mess = messageCheck();

    if ((name != correct) || (email != correct) || (subject != correct) || (mess != correct)) {

        return false;
    } else {

        alert("Message sent successfully");
        console.log("hehe");
        return true;
    }

}

function nameCheck() {
    var name = document.getElementById("name").value;
    var error = document.getElementById("error-name");

    if (name == "") {
        error.textContent = "Please fill out your name.";
        error.style.color = "red";
        return false;

    } else if (name.length > 100) {
        error.textContent = "Your name should not exceed 100 characters.";
        error.style.color = "red";
        return false;

    } else

        error.textContent = "";


    return true;
}

function emailCheck() {
    var email = document.getElementById("email").value;
    var emailRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var error = document.getElementById("error-email");

    if (email == "") {
        error.textContent = "Please fill out your email.";
        error.style.color = "red";
        return false;

    } else if (email.length > 100) {
        error.textContent = "Your email should not exceed 100 characters.";
        error.style.color = "red";
        return false;

    } else if (emailRegular.test(email) == false) {
        error.textContent = "Please enter a valid email.";
        error.style.color = "red";
        return false;
    } else
        error.textContent = "";
    return true
}

function subjectCheck() {
    var subject = document.getElementById("subject").value;
    var error = document.getElementById("error-subject");

    if (subject == "") {
        error.textContent = "Please fill out the subject.";
        error.style.color = "red";
        return false;

    } else if ((subject.length < 50) && (subject.length > 1)) {
        error.textContent = "Subject should not shorter than 50 characters.";
        error.style.color = "red";
        return false;

    } else if (subject.length > 250) {
        error.textContent = "Subject should not longer than 250 characters.";
        error.style.color = "red";
        return false;
    } else
        error.textContent = "";
    return true

}

function messageCheck() {
    var mess = document.getElementById("message").value;
    var error = document.getElementById("error-mess");

    if (mess == "") {
        error.textContent = "Please fill out the message.";
        error.style.color = "red";
        return false;

    } else if (mess.length > 500) {
        error.textContent = "Message should not exceed 500 characters.";
        error.style.color = "red";
        return false;
    } else
        error.textContent = "";
    return true

}