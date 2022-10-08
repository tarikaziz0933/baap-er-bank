document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    withdrawField.value = '';

    if (isNaN(withdrawAmountString) || withdrawAmountString === '') {
        alert('Please enter valid number');
        return;
    }

    const totalAmountElemet = document.getElementById('total-amount');
    const totalAmountString = totalAmountElemet.innerText;
    const totalAmountFloat = parseFloat(totalAmountString);

    if (withdrawAmount > totalAmountFloat) {
        alert('Your account balance is insufficient');
        return;
    }


    const displayWithdrawElement = document.getElementById('display-withdraw');
    const displayWithdrawString = displayWithdrawElement.innerText;
    const displayWithdrawFloat = parseFloat(displayWithdrawString);

    const displayWithdrawFinal = withdrawAmount + displayWithdrawFloat;
    displayWithdrawElement.innerText = displayWithdrawFinal;



    const totalAmountFinal = totalAmountFloat - withdrawAmount;
    totalAmountElemet.innerText = totalAmountFinal;
})

