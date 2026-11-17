// 4. Troco do caixa. Leia um valor inteiro de troco e exiba a menor quantidade de notas de 100, 50, 20, 10, 5, 2 e moedas de 1 para formar esse valor. Use Math.floor() e %.

let changeAmount = Number(prompt("Digite o valor inteiro do troco:"));
const denominations = [100, 50, 20, 10, 5, 2, 1];

for (const denomination of denominations) {
    const quantity = Math.floor(changeAmount / denomination);
    console.log(`${quantity} unidade(s) de R$ ${denomination}`);
    changeAmount %= denomination;
}