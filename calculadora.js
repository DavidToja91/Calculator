//Calculadora con Suma, Resta, Multiplicacion y Division exportadas//
let sumar = require("./sumar");
let restar = require("../restar");
let multiplicar = require("../multiplicar");
let dividir = require("../dividir");
let process = require("process"); //modulo nativo de node.
let operacion = process.argv[2] //recibo por terminal el indice "2" de la opp.
let n1 = Number(process.argv[3]);
let n2 = Number(process.argv[4]);

if (operacion == "sumar") {
    console.log(sumar(n1, n2))
};
if (operacion == "restar") {
    console.log(restar(n1, n2))
};
if (operacion == "multiplicar") {
    console.log(multiplicar(n1, n2))
};
if (operacion == "dividir") {
    console.log(dividir(n1, n2))
};