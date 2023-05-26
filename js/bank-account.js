
const $ = (id) => document.getElementById(id)

let fullName = $("name")
let deposit = $("deposit")
let withdrawal = $("withdrawal")
let customerName = $("customerName")
let customerBalance = $("customerBalance")

function bankAccount(owner) {
    let balance = 0
    let ownerName = owner
    return {
        getOwnerName: function () {
            customerName.innerHTML = ownerName
        },
        getBalance: function (amt) {
            bankAccount.getOwnerName()
            customerBalance.innerHTML = `$${amt.toFixed(2)}`
        },
        makeWithdrawal: function () {
            let withdrawalAmt = parseFloat(prompt("How much are you withdrawing?"))
            if (withdrawalAmt != NaN && withdrawalAmt <= balance ) {
                balance -= withdrawalAmt
                bankAccount.getBalance(balance)
            } else {
                alert("That is not an valid withdrawal amount")
            }
        },
        makeDeposit: function () {
            let depositAmt = parseFloat(prompt("How much are you depositing?"))
            if (depositAmt != NaN && depositAmt > 0 ) {
                balance += depositAmt
                bankAccount.getBalance(balance)
            }  else {
                alert("That is not an valid deposit amount")
            }
        }
    }  
}

function getName() {
    let owner = prompt("What is your full name?")
    try {
        if (owner != '') {
            bankAccount = bankAccount(owner)
            bankAccount.getOwnerName()
            deposit.addEventListener("click", bankAccount.makeDeposit)
            withdrawal.addEventListener("click", bankAccount.makeWithdrawal)
        }
    } catch(err) {
        alert("If you are not the owner of the current account, please log out and then log in")
    }
}

fullName.addEventListener("click", getName)

 