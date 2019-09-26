function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minu} minutos.` 
    if (hora >= 0 && hora <12){
        img.src = 'manha.png'
        document.body.style.background = '#dba05b'}
    else if (hora >=12 && hora <18){
        img.src = 'tarde.png'
        document.body.style.background = '#8ca5bc'}
    else{
        img.src = 'noite.png'
        document.body.style.background = '#01062c'}
    }

  