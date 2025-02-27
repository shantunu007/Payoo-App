
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pinNumber = getInputValueByID("pin-number")
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    const selectedBank = document.getElementById("all-bank").value;
    console.log(selectedBank);

    if(amount < 0){
        
        return;
    }
    
    if(accountNumber.length === 11){
        if(pinNumber === 1234){
            const sum = mainBalance + amount;
            setInnerTextByIDandValue("main-balance", sum);



            const container = document.getElementById("transaction-history");
            
            const div = document.createElement("div");
            div.classList.add("bg-red-400")
            div.innerHTML = `
                <h1 class="text-yellow-300">Added Money from ${selectedBank}</h1>
                <h3>${amount}</h3>
                <p>Account Number : ${accountNumber}</p>
                

            `
            container.appendChild(div)
            console.log(div)
        }
        else{
            console.log("pin thik nai")
        }
    }
    else{
        console.log("account number thik nai")
    }
})