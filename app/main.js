    let livros = []
    const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosApi()

    async function getBuscarLivrosApi() {
        try {
            const res = await fetch(endPointApi)
            livros = await res.json()
            let livrosComDesconto = aplicarDesconto(livros)
            exibirLivros(livrosComDesconto)
        } catch (error) {
            console.error(error)
        }
    }

    