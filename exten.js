let positivos = 0;
let negativos = 0;

while (true) {
    let numero = parseInt(prompt("Digite um número (ou 0 para encerrar): "));
    if (numero === 0) {
        break;
    }
    if (numero > 0) {
        positivos++;
    } else {
        negativos++;
    }
}

console.log("Quantidade de números positivos: " + positivos);
console.log("Quantidade de números negativos: " + negativos);