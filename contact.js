function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("Please enter your name");
        return false
    }
    else if (email = "")
    {
        alert("Please enter your email");
        return false
    }
    else {
        alert("nice");
        return true;
    }
    
  }