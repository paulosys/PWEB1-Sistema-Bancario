class Clientes {
    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente) {
        this._clientes.push(cliente);
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }

    pesquisar(cpf: string): Cliente {
        const cliente = this._clientes.find(cliente => cliente.cpf === cpf);
        if (cliente === undefined) {
            throw new Error("Cliente não encontrado");
        }
        return cliente;
    }

    remover(cpf: string): Cliente {
        const cliente = this.pesquisar(cpf);

        const indice = this._clientes.indexOf(cliente);
        if (indice === -1) {
            throw new Error("Cliente não encontrado");
        }

        this._clientes.splice(indice, 1);
        return cliente;
    }
}