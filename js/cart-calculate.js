// get user input value
function getValue(inputValue, isIncreasing) {
    const inputField = document.getElementById(inputValue);
    const inputNumber = inputField.value;
    if (isIncreasing == true) {
        const input = parseInt(inputNumber) + 1;
        inputField.value = input;
    } else if (isIncreasing == false && inputNumber > 0) {
        const input = parseInt(inputNumber) - 1;
        inputField.value = input;
    }
    return inputNumber;
};

// get user balance info
function updateBalance(product, price) {
    const priceInput = document.getElementById(product + '-price');
    const getInput = document.getElementById(product + '-quantity').value;
    const totalInputBalance = getInput * price;
    priceInput.innerText = totalInputBalance;
    totalBalance();
}

// get total balance
function totalBalance() {
    const phonePrice = getValue('phone-quantity') * 1219;
    const casePrice = getValue('case-quantity') * 59;
    const subTotal = parseFloat(phonePrice) + parseFloat(casePrice);
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('tax-balance').innerText = tax;
    document.getElementById('subtotal-balance').innerText = subTotal;
    document.getElementById('total-balance').innerText = total;
}

// phone handler
const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function() {
    getValue('phone-quantity', true);
    updateBalance('phone', 1219);
});

const phoneMinus = document.getElementById('phone-minus');
phoneMinus.addEventListener('click', function() {
    getValue('phone-quantity', false);
    updateBalance('phone', 1219);
});

// case handler
const casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function() {
    getValue('case-quantity', true);
    updateBalance('case', 59);
});
const caseMinus = document.getElementById('case-minus');
caseMinus.addEventListener('click', function() {
    getValue('case-quantity', false);
    updateBalance('case', 59);
});