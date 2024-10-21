class Produto {
    constructor(codigo, nome, preco, quantidadeEmEstoque) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    exibirDadosProdutos() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Quantidade em Estoque: ${this.quantidadeEmEstoque}`);
    }
}

class CarrinhoDeCompras {
    constructor() {
        this.carrinhoDeCompras = [];
    }

    adicionarProdutoNoCarrinho(quantidade, produto) {
        const itemExistente = this.carrinhoDeCompras.find(item => item.produto.codigo === produto.codigo);

        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            this.carrinhoDeCompras.push({ produto, quantidade });
        }
        console.log(`${quantidade} unidades de ${produto.nome} foram adicionadas ao carrinho.`);
    }

    comprarProduto(nome, quantidade) {
        const item = this.carrinhoDeCompras.find(item => item.produto.nome === nome);

        if (!item) {
            console.log(`O produto ${nome} não está no carrinho.`);
            return 0;
        }

        if (quantidade > item.quantidade) {
            console.log(`Quantidade solicitada de ${nome} é maior que a disponível no carrinho.`);
            return 0;
        }

        item.produto.quantidadeEmEstoque -= quantidade;
        item.quantidade -= quantidade;

        if (item.quantidade === 0) {
            this.carrinhoDeCompras = this.carrinhoDeCompras.filter(i => i.produto.codigo !== item.produto.codigo);
        }

        const total = item.produto.preco * quantidade;
        console.log(`Você comprou ${quantidade} unidades de ${nome}. Total: R$ ${total.toFixed(2)}`);
        return total;
    }

    pesquisarProdutoNoCarrinho(nome) {
        const item = this.carrinhoDeCompras.find(item => item.produto.nome === nome);
        if (item) {
            console.log(`Produto encontrado no carrinho:`);
            item.produto.exibirDadosProdutos();
            console.log(`Quantidade no carrinho: ${item.quantidade}`);
        } else {
            console.log(`Produto ${nome} não encontrado no carrinho.`);
        }
    }

    exibirProdutosNoCarrinhoDeCompras() {
        if (this.carrinhoDeCompras.length === 0) {
            console.log(`O carrinho está vazio.`);
            return;
        }

        console.log(`Produtos no carrinho:`);
        this.carrinhoDeCompras.forEach(item => {
            item.produto.exibirDadosProdutos();
            console.log(`Quantidade no carrinho: ${item.quantidade}`);
            console.log('-----------------------');
        });
    }

    excluirProdutoDoCarrinhoDeCompras(nome) {
        const itemIndex = this.carrinhoDeCompras.findIndex(item => item.produto.nome === nome);
        if (itemIndex !== -1) {
            this.carrinhoDeCompras.splice(itemIndex, 1);
            console.log(`Produto ${nome} foi removido do carrinho.`);
        } else {
            console.log(`Produto ${nome} não encontrado no carrinho.`);
        }
    }

    exibirQuantidadeDeProdutosNoCarrinho() {
        const totalQuantidade = this.carrinhoDeCompras.reduce((total, item) => total + item.quantidade, 0);
        console.log(`Quantidade total de produtos no carrinho: ${totalQuantidade}`);
    }

    calcularTotalDoCarrinho() {
        const total = this.carrinhoDeCompras.reduce((soma, item) => soma + (item.produto.preco * item.quantidade), 0);
        return total;
    }
}

// usando as funções
const produto1 = new Produto(101, 'Camiseta', 29.90, 50);
const produto2 = new Produto(102, 'Calça', 79.90, 30);

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProdutoNoCarrinho(2, produto1);
carrinho.adicionarProdutoNoCarrinho(1, produto2);
carrinho.exibirProdutosNoCarrinhoDeCompras();
carrinho.pesquisarProdutoNoCarrinho('Camiseta');
carrinho.exibirQuantidadeDeProdutosNoCarrinho();
const totalCarrinho = carrinho.calcularTotalDoCarrinho();
console.log(`Total do carrinho: R$ ${totalCarrinho.toFixed(2)}`);
carrinho.excluirProdutoDoCarrinhoDeCompras('Calça');
