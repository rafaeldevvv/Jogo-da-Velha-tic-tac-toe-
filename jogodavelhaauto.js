const vitorias = ['012', '345', '678', '036', '147', '258', '246', '048']

var jogada = 0
var numJogadas = 0

if (localStorage.getItem('vez')) {
    var vez = localStorage.getItem('vez')
}

var xpositions = []
var cpositions = []

var btIniciar = document.getElementById('btIniciar')
btIniciar.addEventListener("click", function () {
    var inicio = document.getElementById('inicio')
    inicio.className = 'oculta'
    document.getElementById('tudo').className = 'container-master'

    var rdX = document.getElementById("rdX")
    if (rdX.checked) {
        jogada = 0
        if (vez == 'robo') {
            jogada = 1
        }
    } else {
        jogada = 1
        if (vez == 'robo') {
            jogada = 0
        }
    }

    if (vez == 'robo') {
        roboJoga()
    }
})

function jogar(num) {
    if (xpositions.indexOf(num) != -1 || cpositions.indexOf(num) != -1) {
        alert('Ja foi marcado.')
        return
    }

    var img = document.createElement('img')
    img.className = 'imgJogada'
    if (jogada == 0) {
        img.src = 'img/x.png'
        xpositions.push(num)
        jogada = 1
    } else {
        img.src = 'img/circle.png'
        cpositions.push(num)
        jogada = 0
    }

    document.getElementsByClassName('quadrado')[num].appendChild(img)
    numJogadas += 1

    if (numJogadas < 9) {
        roboJoga()
    }
    verificarVencedor()
}

function roboJoga() {
    var numAle = 0
    do {
        numAle = Math.floor(Math.random() * 9)
    } while (xpositions.indexOf(numAle) != -1 || cpositions.indexOf(numAle) != -1)

    var img = document.createElement('img') // cria uma imagem
    img.className = 'imgJogada' // define a classe da imagem criada
    if (jogada == 0) { // verifica a vez para definir uma fonte correspondente
        img.src = 'img/x.png'
        xpositions.push(numAle)
        jogada = 1
    } else {
        img.src = 'img/circle.png'
        cpositions.push(numAle)
        jogada = 0
    }

    document.getElementsByClassName('quadrado')[numAle].appendChild(img)
    numJogadas += 1

    verificarVencedor()
}

function verificarVencedor() {
    var vencedor = ''
    var verifx = [false, false, false]
    for (let c = 0; c < vitorias.length; c++) {
        for (let v = 0; v < 3; v++) {
            if (xpositions.indexOf(Number(vitorias[c].charAt(v))) != -1) {
                verifx[v] = true
            }
        }

        if (verifx[0] && verifx[1] && verifx[2]) {
            vencedor = 'X'
            break
        } else {
            verifx = [false, false, false]
        }
    }

    var verifc = [false, false, false]
    for (let c = 0; c < vitorias.length; c++) {
        for (let v = 0; v < 3; v++) {
            if (cpositions.indexOf(Number(vitorias[c].charAt(v))) != -1) {
                verifc[v] = true
            }
        }

        if (verifc[0] && verifc[1] && verifc[2]) {
            vencedor = 'CÍRCULO'
            break
        } else {
            verifc = [false, false, false]
        }
    }

    if (vencedor != '' || numJogadas == 9) {
        concluirJogo(vencedor)
    }
}

function concluirJogo(vencedor) {
    var outVencedor = document.getElementById('vencedor')
    if (vencedor != '') {
        outVencedor.textContent = `Vencedor: ${vencedor}`
    } else {
        outVencedor.textContent = 'Não houve vencedor'
    }

    document.getElementById('tudo').className = 'oculta'
    document.getElementById('resFinal').className = 'resFinal'

    if (localStorage.getItem('vez')) {
        if (vez == 'robo') {
            localStorage.setItem('vez', 'pessoa')
        } else {
            localStorage.setItem('vez', 'robo')
        }
    } else {
        localStorage.setItem('vez', 'robo')
    }
}

var btJogarNovamente = document.getElementById('btJogarNovamente')
btJogarNovamente.addEventListener('click', function () {
    location.reload()
})

function marcar1() {
    jogar(0)
}
var quadrado1 = document.getElementsByClassName('quadrado')[0]
quadrado1.addEventListener('click', marcar1)

function marcar2() {
    jogar(1)
}
var quadrado2 = document.getElementsByClassName('quadrado')[1]
quadrado2.addEventListener('click', marcar2)

function marcar3() {
    jogar(2)
}
var quadrado3 = document.getElementsByClassName('quadrado')[2]
quadrado3.addEventListener('click', marcar3)

function marcar4() {
    jogar(3)
}
var quadrado4 = document.getElementsByClassName('quadrado')[3]
quadrado4.addEventListener('click', marcar4)

function marcar5() {
    jogar(4)
}
var quadrado5 = document.getElementsByClassName('quadrado')[4]
quadrado5.addEventListener('click', marcar5)

function marcar6() {
    jogar(5)
}
var quadrado6 = document.getElementsByClassName('quadrado')[5]
quadrado6.addEventListener('click', marcar6)

function marcar7() {
    jogar(6)
}
var quadrado7 = document.getElementsByClassName('quadrado')[6]
quadrado7.addEventListener('click', marcar7)

function marcar8() {
    jogar(7)
}
var quadrado8 = document.getElementsByClassName('quadrado')[7]
quadrado8.addEventListener('click', marcar8)

function marcar9() {
    jogar(8)
}
var quadrado9 = document.getElementsByClassName('quadrado')[8]
quadrado9.addEventListener('click', marcar9)

function jogarNovamente() {
    location.reload()
}