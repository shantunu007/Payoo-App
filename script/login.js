// console.log("hello world");

document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if(accountNumber.length === 11){
        if(parseInt(pinNumber) === 1234){
            window.location.href = "./main.html"
        }
        else{
            console.log("wrong pin number");
        }
    }
    else{
        console.log("need valid account number");
    }
})