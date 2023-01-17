
const verso1 = {id: 0, name: "messi"}
const verso2 = {id: 0, name: "messi"}
const verso3 = {id: 1, name: "cat"}
const verso4 = {id: 1, name: "cat"}
const verso5 = {id: 2, name: "terra"}
const verso6 = {id: 2, name: "terra"}
const verso7 = {id: 3, name: "troy"}
const verso8 = {id: 3, name: "troy"}
const verso9 = {id: 4, name: "dumbledore"}
const verso10 = {id: 4, name: "dumbledore"}
const verso11 = {id: 5, name: "hxh"}
const verso12 = {id: 5, name:"hxh" }
const verso13 = {id: 6, name: "erwin"}
const verso14 = {id: 6, name: "erwin"}

const todas = [verso1, verso2, verso3, verso4, verso5, verso6, verso7, 
    verso8, verso9, verso10, verso11, verso12, verso13, verso14];

function timer(tempo){
    setInterval(function(){
        document.getElementById("timer").innerHTML = tempo.toString();
        tempo +=1;
    }, 2000);
}
function game(){
    let qCartas = 0;
    let rodadas = 0;
    let tempo = 0;
    while(qCartas % 2 !== 0|| qCartas > 14 || qCartas < 4 ){
        qCartas = prompt('Qual a quantidade de cartas você quer que o jogo tenha? (limitado a um número par e entre 4 e 14');
    }
    timer(tempo);
    addCartas(qCartas);
}

function virarCarta(){
    console.log('clique')
}


function addCartas(qCartas){
    const jogo = document.querySelector('.jogo');
    const atual = todas.slice(0, qCartas).sort((id, name) => 0.5 - Math.random());
    jogo.innerHTML = "";4
    atual.forEach(card => {
        jogo.innerHTML +=
        `<div class="maincontainer" onclick="clickCard(this, ${card.id})">
        <div class="card" data-test="card">
            <div class="frente">
                <img src="imagens/back.png" alt="" />
            </div>
            <div class="costas">
                <img src="imagens/${card.name}.gif" alt=""/>
            </div>
        </div>
    </div>`
    })
}

function turnCarta(){
    //função que vira a carta
}

function checkMatch(){
    //Verificar se as cartas quando comparadas possuem o mesmo gif, caso possuirem, se mantém viradas e é contabilizada uma jogada, caso sejam diferentes elas viram de novo e é contabilizada a jogada
}

function win(){
    
}

game();