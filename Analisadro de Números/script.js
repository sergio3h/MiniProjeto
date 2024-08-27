
let resultado = document.querySelector('div#resultado')
let vet = [];
let k = 0 ;

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false
    }
}

function adicionar(){
    let fnum = Number(document.querySelector('input#num').value)
    let flista = document.querySelector('select#lista')
    if(fnum <1 || fnum>100 || fnum == '' || inLista(fnum,vet)){
        window.alert("Erro, valor inválido")
    }else{
        vet[k] = fnum;
        k++;
        let item = document.createElement('option')
        item.text = `Valor ${fnum} adicionado`
        flista.appendChild(item)
        resultado.innerHTML = `Variável add ${fnum}`    
        return vet;
    }
}

function finalizar(){
    let contador = vet.length;
    let maior = vet[0]
    let menor = vet[0]
    let soma = 0
    let media
    for(k =0;k<contador;k++){
        if(vet[k]>maior){
            maior = vet[k]
        }
        if(vet[k]<menor){
            menor = vet[k]
        }
        soma = soma + vet[k]
    }
    media = soma / contador
    resultado.innerHTML = `Ao todo, temos ${contador} números cadastrados
    <br>O maior valor informado foi ${maior}<br>
    O menor valor informado foi ${menor}<br>
    Somandos todos os valores, temos ${soma}<br>
    A média dos valores digitados é ${media}`  
}