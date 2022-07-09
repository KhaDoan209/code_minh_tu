function validateFormOrder() {
    let correct = true;

    var cake = cakeSelectCheck();
    var name = nameCheck();
    var mess = messageCheck();
    var deliDate = deliverDateCheck();
    var deliAddress = deliverAddressCheck();

    if ((cake != correct) || (name != correct) || (mess != correct) || (deliDate != correct) || (deliAddress != correct)) {

        return false;

    } else {

        alert("Oder has been processed successfully");
        return true;
    }
}

function cakeSelectCheck() {
    var cake = document.getElementById("cakeList");
    var error = document.getElementById("error-cake");

    
    if (cake.value == "------------ Select Blog Type ------------") {
        error.textContent = "Please select our product.";
        error.style.backgroundColor = "#D0342C";

        return false;
    } else
        error.textContent = "";
    error.style.backgroundColor = "white";
    return true;
}

function nameCheck() {
    var name = document.getElementById("name");
    var error = document.getElementById("error-name");

    if (name.value.length == "") {
        error.textContent = "Please fill out your name.";
        error.style.backgroundColor = "#D0342C";
        return false;
    } else if (name.value.length > 100) {
        error.textContent = "Your name should not exceed 100 characters.";
        error.style.backgroundColor = "#D0342C";
        return false;
    } else
        error.textContent = "";
    error.style.backgroundColor = "white";
    return true;
}

function messageCheck() {
    var mess = document.getElementById("message");
    var error = document.getElementById("error-message");

    if (mess.value.length > 30) {
        error.textContent = "Message should not exceed 30 characters";
        error.style.backgroundColor = "#D0342C";
        return false;
    } else error.textContent = "";
    error.style.backgroundColor = "white";
    return true;
}

function deliverDateCheck() {
    var deliverDate = document.getElementById("delivery-date");
    var error = document.getElementById("error-deli-date");


    if (deliverDate.value == "") {
        error.textContent = "Please choose a delivery date";
        error.style.backgroundColor = "#D0342C";
        return false;
    } else error.textContent = "";
    error.style.backgroundColor = "white";
    return true;
}

function deliverAddressCheck() {
    var deliverAddress = document.getElementById("delivery-address");
    var error = document.getElementById("error-deli-address");

    if (deliverAddress.value == "") {
        error.textContent = "Please fill out the address.";
        error.style.backgroundColor = "#D0342C";
        return false;

    } else if (deliverAddress.value.length > 500) {
        error.textContent = "Address should not exceed 500 characters.";
        error.style.backgroundColor = "#D0342C";
        return false;

    } else error.textContent = "";
    error.style.backgroundColor = "white";
    return true;
}