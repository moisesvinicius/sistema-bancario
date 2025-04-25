let balance = 0;

    function updateBalance() {
        document.getElementById('balance').innerText = balance.toFixed(2);
    }

    function deposit() {
        const amount = parseFloat(document.getElementById('amount').value);
        if (amount > 0) {
            balance += amount;
            updateBalance();
            document.getElementById('amount').value = '';
        } else {
            alert('Por favor, insira um valor válido para depositar.');
        }
    }

    function withdraw() {
        const amount = parseFloat(document.getElementById('amount').value);
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            updateBalance();
            document.getElementById('amount').value = '';
        } else {
            alert('Por favor, insira um valor válido para sacar.');
        }
    }
