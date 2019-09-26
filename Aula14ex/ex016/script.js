function contar(){
    var ini = document.getElementById('ini')
    var i = Number(ini.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var pas = document.getElementById("pas")
    var p = Number(pas.value)
    var res = document.getElementById("res")
    res.innerHTML = `Contando `
    if (!i || !f ) { //contagem crescente
        res.innerHTML = 'Impossivel Contar'
        window.alert(`[ERRO] Não deixe campos em branco!`)  
    if (p <= 0 ){
        window.alert('Passo inválido! Considerando Passo 1')
        p = 1
    }      
    } else if (i < f) {
        res.innerHTML = `Contando :</br>`
        for (i; i <= f; i += p) {
            res.innerHTML += `${i} 👉 ` }  }
    else if(i > f){ //contagem regressiva
        for(i; i>=f; i-=p){
        res.innerHTML += `${i}👉 `
        }res.innerHTML += `🏁`
        }

    }

   

