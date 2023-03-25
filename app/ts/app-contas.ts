const contaController = new ContaController();

const conta = new Conta('1234-5', 100);
const poupanca = new Poupanca('2468-0', 500);
const contaBonificada = new ContaBonificada('36911-3', 0);

contaController.listar();

console.log('Conta: ' + conta.saldo);

poupanca.atualizarSaldoAniversario();
console.log('Poupanca: ' + poupanca.saldo);

contaBonificada.creditar(100);
console.log('Conta Bonificada: ' + contaBonificada.saldo);