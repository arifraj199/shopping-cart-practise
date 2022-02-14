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
};

function updateBalance(product, price) {
    const priceInput = document.getElementById(product + '-price');
    const getInput = document.getElementById(product + '-quantity').value;
    const totalBalance = getInput * price;
    priceInput.innerText = totalBalance;
}
// phone handler
const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function() {
    const getInputValue = getValue('phone-quantity', true);
    updateBalance('phone', 1219);
});

const phoneMinus = document.getElementById('phone-minus');
phoneMinus.addEventListener('click', function() {
    const getInputValue = getValue('phone-quantity', false);
    updateBalance('phone', 1219);
});

// case handler
const casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function() {
    const getInputValue = getValue('case-quantity', true);
    updateBalance('case', 59);
});
const caseMinus = document.getElementById('case-minus');
caseMinus.addEventListener('click', function() {
    const getInputValue = getValue('case-quantity', false);
    updateBalance('case', 59);
});

// price handler