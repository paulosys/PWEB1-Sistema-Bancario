class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");

        this.inputCpf.addEventListener('input', (event) => {
            const inputElement = event.target as HTMLInputElement;
            const value = inputElement.value.replace(/\D/g, '');
            inputElement.value = this.formatarCPF(value);;
        });

        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const conta = this.criarContaAleatoria();
        const novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);

        this.clientes.inserir(novoCliente);

        this.inserirClienteNoHTML(novoCliente);
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const tabelaCorpo = document.querySelector('#tabela-clientes');
        const linhaTabela = document.createElement('tr');

        const dataTabelaNome = document.createElement('td');
        const dataTabelaCpf = document.createElement('td');
        const dataTabelaConta = document.createElement('td');

        dataTabelaNome.textContent = cliente.nome;
        dataTabelaCpf.textContent = cliente.cpf;
        dataTabelaConta.textContent = cliente.conta.numero;

        linhaTabela.appendChild(dataTabelaNome);
        linhaTabela.appendChild(dataTabelaCpf);
        linhaTabela.appendChild(dataTabelaConta);
        linhaTabela.appendChild(this.criarBotaoApagar(cliente));
        
        tabelaCorpo.appendChild(linhaTabela);

        this.inputNome.value = '';
        this.inputCpf.value = '';
    }

    private criarBotaoApagar(cliente: Cliente): HTMLButtonElement {
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('Removendo cliente' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );

        return botaoApagar;
    }

    private criarContaAleatoria(): Conta {
        const numeroAleatorio = Math.floor(Math.random() * 10000);
        const numeroConta = `${numeroAleatorio}-0`;
        const saldoAleatorio = Math.random() * 100;
        return new Conta(numeroConta, saldoAleatorio);
    }

    private formatarCPF(cpf: string): string {
        let cpfFormatado = '';

        if (cpf.length > 0) {
            cpfFormatado = cpf.substring(0, 3);

            if (cpf.length > 3) {
                cpfFormatado += `.${cpf.substring(3, 6)}`;

                if (cpf.length > 6) {
                    cpfFormatado += `.${cpf.substring(6, 9)}`;

                    if (cpf.length > 9) {
                        cpfFormatado += `-${cpf.substring(9)}`;
                    }
                }
            }
        }

        return cpfFormatado;
    }

}   