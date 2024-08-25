function tabuada() {
    let conta = Number(document.getElementById('conta').value);

    if (conta == '') {
        window.alert('Erro, insira um número válido.');
        return;
    }

    let tab = document.getElementById('seltab');
    tab.innerHTML = '';

    for (let k = 1; k <= 10; k++) {
        let num = k * conta;
        let item = document.createElement('option');
        item.text = `${conta} x ${k} = ${num}`;
        tab.appendChild(item);
    }
}