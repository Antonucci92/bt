function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amont-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amount = parseInt(amountInput.value) * price;
    alert("fizetendő: " + amount + "Ft");
    showAmount.innerHTML = amount;
}
