const $ = (id) => document.getElementById(id)

let fullName = $("name")
let deposit = $("deposit")
let withdrawal = $("withdrawal")
let customerInfo = $("withdrawal")
let customerName = $("customerName")
let customerBalance = $("customerBalance")


const bankAccount = function (owner) {
    let balance = 0
    let ownerName = owner
    return {
        getOwnerName: function () {
            customerName.innerHTML = ownerName
            return this
        },
        getBalance: function () {
            customerBalance.innerHTML = `$${balance.toFixed(2)}`
            return this
        },
        makeWithdrawal: function () {
            let withdrawalAmt = parseFloat(prompt("How much are you withdrawing?"))
            if (withdrawalAmt != NaN && withdrawalAmt <= balance ) {
                balance -= withdrawalAmt
                customerBalance.innerHTML = `$${balance.toFixed(2)}`
            } else {
                alert("That is not an valid withdrawal amount")
            }
            return this
        },
        makeDeposit: function () {
            let depositAmt = parseFloat(prompt("How much are you depositing?"))
            if (depositAmt != NaN && depositAmt > 0 ) {
                balance += depositAmt
                customerBalance.innerHTML = `$${balance.toFixed(2)}`
            }  else {
                alert("That is not an valid deposit amount")
            }
            return this
        }
    }  
}

function getName() {
    let owner = prompt("What is your full name?")
    if (owner != '') {
        let newBankAccount = bankAccount(owner)
        newBankAccount.getBalance()
        newBankAccount.getOwnerName()
        deposit.addEventListener("click", newBankAccount.makeDeposit)
        withdrawal.addEventListener("click", newBankAccount.makeWithdrawal)
    }
}

fullName.addEventListener("click", getName)

 