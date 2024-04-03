    // filter
    const botoes = document.querySelectorAll('.btn').forEach(btn => {btn.addEventListener('click', filtrarLivros)})

    function filtrarLivros() {
        const elementoBtn = document.getElementById(this.id).value
        let livrosFiltrados = elementoBtn == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(elementoBtn)
        exibirLivros(livrosFiltrados)
        if (elementoBtn == 'disponivel') {
            const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
            exibirValorTotalLivrosDisponiveis(valorTotal)
        }
    }

    function filtrarPorCategoria(elementoBtn) {
        return livros.filter(livro => livro.categoria == elementoBtn)
    }

    function filtrarPorDisponibilidade() {
        return livros.filter(livro => livro.quantidade > 0)
    }

    function exibirValorTotalLivrosDisponiveis(valorTotal) {
        elementoValorTotalDeLivrosDisponiveis.innerHTML = `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span></p>
            </div>
        `
    }


    // sort
    document.getElementById('btnOrdenarPorPreco').addEventListener('click', () => {
        exibirLivros(livros.sort((a, b) => a.preco - b.preco));
    });

    
    // reduce
    function calcularValorTotalLivrosDisponiveis(livros) {
        return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
    }