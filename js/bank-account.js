
const $ = (id) => document.getElementById(id)

let fullName = $("name")
let deposit = $("deposit")
let withdrawal = $("withdrawal")
let customerName = $("customerName")
let customerBalance = $("customerBalance")

let bankAccount = function (owner) {
    let balance = 0
    let ownerName = owner
    return {
        getOwnerName: function () {
            customerName.innerHTML = ownerName
            return this
        },
        getBalance: function (amt) {
            bankAccount.getOwnerName()
            customerBalance.innerHTML = `$${amt.toFixed(2)}`
            return this
        },
        makeWithdrawal: function () {
            let withdrawalAmt = parseFloat(prompt("How much are you withdrawing?"))
            if (withdrawalAmt != NaN && withdrawalAmt <= balance ) {
                balance -= withdrawalAmt
                bankAccount.getBalance(balance)
            } else {
                alert("That is not an valid withdrawal amount")
            }
            return this
        },
        makeDeposit: function () {
            let depositAmt = parseFloat(prompt("How much are you depositing?"))
            if (depositAmt != NaN && depositAmt > 0 ) {
                balance += depositAmt
                bankAccount.getBalance(balance)
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
        bankAccount = bankAccount(owner)
        bankAccount.getOwnerName()
        // fullName.disabled = true
        deposit.addEventListener("click", bankAccount.makeDeposit)
        withdrawal.addEventListener("click", bankAccount.makeWithdrawal)
    }
}

fullName.addEventListener("click", getName)

 