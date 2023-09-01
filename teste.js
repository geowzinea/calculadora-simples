function Somar() {

    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)

    var soma = num1 + num2

    document.getElementById('resultado').innerHTML = "A soma dos números é: " + soma
}

function Subtrair() {

    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)

    var subtracao = num1 - num2

    document.getElementById('resultado').innerHTML = "A subtração dos números é: " + subtracao
}

function Multiplicar() {
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)

    var multiplicacao = num1 * num2

    document.getElementById('resultado').innerHTML = "A multiplição dos números é: " + multiplicacao
}

function Dividir() {
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)

    var divisao = num1 / num2

    document.getElementById('resultado').innerHTML = "A divisão dos números é: " + divisao
}