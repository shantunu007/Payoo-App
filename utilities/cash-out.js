
document.getElementById("btn-cashout-money").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueByID
    ("cashout-amount");
    const pinNumber = getInputValueByID("pin-number");
    const mainBalance = getInnerTextByID("main-balance");
    const selectedBank = document.getElementById("all-bank").value;
    console.log(selectedBank);



    if(amount > mainBalance){
        alert("vai amount tw beshi hoye gelo")
        return;
    }

    if(accountNumber.length === 11){
        if(pinNumber === 1234){
            const sum = mainBalance - amount;
            setInnerTextByIDandValue("main-balance", sum);

            const container = document.getElementById("transaction-history");
            const p = document.createElement("p");
            p.innerText = `
            cashout ${amount} from ${accountNumber} account
            `
            container.appendChild(p);
        }
        else{
            console.log("wrong pin number")
        }
    }
    else{
        alert("pin thik nai")
    }
})