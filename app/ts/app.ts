const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

let clientes = new Clientes();

clientes.inserir(new Cliente('João', '111.111.111-11', c1));
clientes.inserir(new Cliente('Maria', '222.222.222-22', p1));
clientes.inserir(new Cliente('José', '333.333.333-33', cb1));

clientes.listar().forEach(cliente => { console.log(cliente) });

clientes.remover('222.222.222-22');
console.log('Removeu');

clientes.listar().forEach(cliente => { console.log(cliente) });

console.log('pesquisa:', clientes.pesquisar('333.333.333-33'));

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
