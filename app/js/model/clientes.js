class Clientes {
    _clientes;
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        const cliente = this._clientes.find(cliente => cliente.cpf === cpf);
        if (cliente === undefined) {
            throw new Error("Cliente não encontrado");
        }
        return cliente;
    }
    remover(cpf) {
        const cliente = this.pesquisar(cpf);
        const indice = this._clientes.indexOf(cliente);
        if (indice === -1) {
            throw new Error("Cliente não encontrado");
        }
        this._clientes.splice(indice, 1);
        return cliente;
    }
}
