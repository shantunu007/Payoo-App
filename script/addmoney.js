document.getElementById("cash-out").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function(event){
    
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "block";
})

document.getElementById("cash-out-box").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("add-money").style.display = "none";
})

document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    const convertedPinNumber = parseInt(pinNumber);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedBalance = parseFloat(mainBalance);

    if(accountNumber.length === 11){
        if(convertedPinNumber === 1234){
            const sum = convertedBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
    }
    else{
        alert("enter the valid pin");
    }
})