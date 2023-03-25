class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._dependentes = new Array<Cliente>();
    }

    inserirDependente(dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    listar(): Array<Cliente> {
        return this._dependentes;
    }

    pesquisar(cpf: string): Cliente {
        const cliente = this._dependentes.find(cliente => cliente.cpf === cpf);
        if (cliente === undefined) {
            throw new Error("Cliente não encontrado");
        }
        return cliente;
    }


    remover(cpf: string): Cliente {
        const dependente = this.pesquisar(cpf);

        const indice = this._dependentes.indexOf(dependente);
        if (indice === -1) {
            throw new Error("Dependente não encontrado");
        }

        this._dependentes.splice(indice, 1);
        return dependente;
    }
}