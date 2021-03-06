var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');      //document.getElementById SERVE PARA PEGAR O VALOR ATRAVÉS DO id
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X')

function escolherQuadrado (id){
    if (vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){              
        return;                      //O return FAZ COM QUE O RESTOM DA FUNÇÃO NÃO SEJA EXECUTADA              
    }

    quadrado.innerHTML = jogador;   // innerHTML É UTILIZADO PARA ALTERAR O VALOR DO ELEMENTO
    quadrado.style.color = '#000'   //style.color MUDA A COR DO QUADRADO

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}



function mudarJogador(valor){                 //O VALOR INICIAL É PASSADO LÁ EM CIMA COMO 'X'
    jogador = valor;                          //jogador PASSA A VALER X
    jogadorSelecionado.innerHTML = jogador;   //ALTERA A LABEL ID DENOMINADA jogadorSelecionado
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2); 
    var quadrado3 = document.getElementById(3); 
    var quadrado4 = document.getElementById(4); 
    var quadrado5 = document.getElementById(5); 
    var quadrado6 = document.getElementById(6); 
    var quadrado7 = document.getElementById(7); 
    var quadrado8 = document.getElementById(8); 
    var quadrado9 = document.getElementById(9);
    
    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        corAsserto(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        corAsserto(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        corAsserto(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        corAsserto(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        corAsserto(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        corAsserto(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        corAsserto(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        corAsserto(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function corAsserto(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#25D366'
    quadrado2.style.background = '#25D366'
    quadrado3.style.background = '#25D366'
    quadrado1.style.color = '#ffffff'
    quadrado2.style.color = '#ffffff'
    quadrado3.style.color = '#ffffff'
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if(quadrado1.innerHTML !== '-'  && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        //CÓDIGO
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}

