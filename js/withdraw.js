document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // calculate total withdraw amount

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // set now
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
    
    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set
    balanceTotalElement.innerText =newBalanceTotal;

    // clear the input field
    withdrawField.value = '';
})