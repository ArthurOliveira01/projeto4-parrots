function inicioJogo(){
    nCartas = prompt('Digite uma quantidade par de cartas de 4 a 14');
    if(nCartas > 3 && nCartas < 15 && nCartas % 2 == 0){
        alert('Quantidade de cartas válida');
    } else{
        alert('Quantidade de cartas inválida');
    }
}

function addCartas(){
    let aux = 0;
    while(aux < nCartas){
        //adicionar lógica do código de adicionar as divs de carta
    }
}

function turnCarta(){
    //função que vira a carta
}

function checkMatch(){
    //Verificar se as cartas quando comparadas possuem o mesmo gif, caso possuirem, se mantém viradas e é contabilizada uma jogada, caso sejam diferentes elas viram de novo e é contabilizada a jogada
}

function timer(){
    //contabiliza em quanto tempo o jogador finaliza o jogo
}

function win(){
    //função que verifica se a quantidade de acertos é o suficiente para encerrar o jogo, caso seja encerre o jogo e retorne a mensagem de em quantas jogadas, quanto tempo o jogador demora para finalizar o jogo, 
}