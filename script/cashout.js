document.getElementById("btn-cashout-money").addEventListener("click", function(event){
    event.preventDefault();
    const pinNumber = document.getElementById("pin-number").value;
    const convertedPin = parseInt(pinNumber);

    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(convertedPin === 1234){
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else{
        alert("Wrong pin number");
    }
})




