
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById("pin-number").value;
    const convertedPin = parseInt(pinNumber);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedBalance = parseFloat(mainBalance);
    if(amount && pinNumber){
        if(convertedPin === 1234){
            const sum = convertedBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else{
            console.log("wrong pin number")
        }
    }
})


