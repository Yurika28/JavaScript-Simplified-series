let balance = 0;

function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    console.log(`Deposited $${amount}. Current balance: $${balance}.`);
  } else {
    console.log("Deposit amount must be positive.");
  }
}

function withdraw(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    console.log(`Withdrew $${amount}. Current balance: $${balance}.`);
  } else if (amount > balance) {
    console.log("Insufficient funds.");
  } else {
    console.log("Withdrawal amount must be positive.");
  }
}

function checkBalance() {
  console.log(`Your current balance is $${balance}.`);
}

// Example usage:
deposit(100);
withdraw(30);
checkBalance(); // Output: "Your current balance is $70."
