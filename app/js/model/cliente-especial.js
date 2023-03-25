class ClienteEspecial extends Cliente {
    _dependentes;
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array();
    }
    inserirDependente(dependente) {
        this._dependentes.push(dependente);
    }
    listar() {
        return this._dependentes;
    }
    pesquisar(cpf) {
        const cliente = this._dependentes.find(cliente => cliente.cpf === cpf);
        if (cliente === undefined) {
            throw new Error("Cliente não encontrado");
        }
        return cliente;
    }
    remover(cpf) {
        const dependente = this.pesquisar(cpf);
        const indice = this._dependentes.indexOf(dependente);
        if (indice === -1) {
            throw new Error("Dependente não encontrado");
        }
        this._dependentes.splice(indice, 1);
        return dependente;
    }
}
