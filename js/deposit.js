document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    depositField.value = '';
    if (isNaN(depositAmountString) || depositAmountString === '') {
        alert('Please enter a valid number');
        return;
    }
    // console.log(depositAmountString);


    const displayDepositElement = document.getElementById('display-deposit');
    const displayDepositString = displayDepositElement.innerText;
    const displayDepositFloat = parseFloat(displayDepositString);

    const displayDepositFinal = depositAmount + displayDepositFloat;
    displayDepositElement.innerText = displayDepositFinal;

    const totalAmountElemet = document.getElementById('total-amount');
    const totalAmountElemetString = totalAmountElemet.innerText;
    const totalAmount = parseFloat(totalAmountElemetString);

    const totalAmountFinal = totalAmount + depositAmount;
    totalAmountElemet.innerText = totalAmountFinal;



})
