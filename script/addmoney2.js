
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pinNumber = getInputValueByID("pin-number")
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    
    if(accountNumber.length === 11){
        if(pinNumber === 1234){
            const sum = mainBalance + amount;
            setInnerTextByIDandValue("main-balance", sum);
        }
        else{
            console.log("pin thik nai")
        }
    }
    else{
        console.log("account number thik nai")
    }
})