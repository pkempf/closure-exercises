function createAccount(pin, amount = 0) {
    let userPIN = pin;
    let balance = amount;

    function checkBalance(enteredPIN) {
        if (enteredPIN !== userPIN) return "Invalid PIN.";
        else return "$" + balance;
    }

    function deposit(enteredPIN, depositAmount) {
        if (enteredPIN !== userPIN) return "Invalid PIN.";
        else if (depositAmount <= 0) return "That doesn't make sense - you must deposit a positive amount of money. If you want to remove money, make a withdrawal.";
        else {
            balance += depositAmount;
            return "Successfully deposited $" + depositAmount + ". Current balance: $" + balance + ".";
        }
    }

    function withdraw(enteredPin, withdrawAmount) {
        if (enteredPin !== userPIN) return "Invalid PIN.";
        else if (withdrawAmount <= 0) return "That doesn't make sense - you must withdraw a positive amount of money. If you want to add money, make a deposit.";
        else if (withdrawAmount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        else {
            balance -= withdrawAmount;
            return "Successfully withdrew $" + withdrawAmount + ". Current balance: $" + balance + ".";
        }
    }

    function changePin(oldPIN, newPIN) {
        if (oldPIN !== userPIN) return "Invalid PIN.";
        else {
            userPIN = newPIN;
            return "PIN successfully changed!";
        }
    }

    return {checkBalance, deposit, withdraw, changePin};
}

module.exports = { createAccount };
