function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if(elemento != null && elemento.localName === 'audio'){

        elemento.play();
    }
    
    else{
        console.log('Seletor Não encontrado ou Seletor invalido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');




for (let contador = 0; contador < listaDeTeclas.length; contador++) {
   
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    //renomeação do item na ordem da lista
    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio)

    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio)
    }
    tecla.onkeydown = function (event) {
        console.log(event.code === 'Space')
        if(event.code === 'Space' || event.code === 'Enter' ) {
            tecla.classList.add ('ativa')
        }
     
        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove ('ativa')
    }
}


