function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmpassword = document.getElementById("cnfrmpassword").value;
    console.log(password,cnfrmpassword);
    let message = document.getElementById("message");

    if(password.length !=0){
        if(password == cnfrmpassword){
            message.textContent = "Passwords Match";
        }
        else{
            message.textContent = "Passwords mismatch";
        }
    }
}
