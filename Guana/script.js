function calcula(){
    let init = Number(document.getElementById('init').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)

    if(init == '' || fim == '' || passo == 0 || passo == ''){
        window.alert('Impossível calcular')
        return
    }else{
        let i = init
        let f = fim
        let p = passo
        if(i<f){
            for(let c = i; c <= f; c += p){
                let res = document.getElementById('res');
                res.innerHTML += ` \u{1F449} ${c}`
            }
        }
        else{
            for(let c = i; c >= f;c -= p){
                let res = document.getElementById('res');
                res.innerHTML += ` \u{1F449} ${c}`
            }
        }
        res.innerHTML +=`\u{1F3C1}`
    }
}