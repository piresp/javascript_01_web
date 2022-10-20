function tocaSom(idElementoAudio) {  
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while (i < listaDeTeclas.length) {
    listaDeTeclas[i].onclick = function () {
        tocaSom('som_tecla_pom');
    };

    i = i + 1;
}