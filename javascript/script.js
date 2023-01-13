function inicioJogo(){
    nCartas = prompt('Digite uma quantidade par de cartas de 4 a 14');
    if(nCartas > 3 && nCartas < 15 && nCartas % 2 == 0){
        alert('Quantidade de cartas válida');
    } else{
        alert('Quantidade de cartas inválida');
    }
}