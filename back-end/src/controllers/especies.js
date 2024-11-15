import prisma from '../database/client.js'
import { includeRelations } from '../lib/utils.js'

const controller = {}

controller.create = async function (req, res) {
    try {
        /*
          Conecta-se ao BD e envia uma instrução de
          criação de um novo documento, com os dados
          que estão dentro de req.body
        */
        await prisma.especie.create({ data: req.body })

        // Envia uma resposta de sucesso ao front-end
        // HTTP 201: Created
        res.status(201).end()
    }
    catch (error) {
        // Deu errado: exibe o erro no console do back-end
        console.error(error)

        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function (req, res) {
    const include = includeRelations(req.query)
    try {
        // Manda buscar os dados no servidor
        const result = await prisma.especie.findMany({
            orderBy: [{ nome: 'asc' }],
            include
        })

        // Retorna os dados obtidos ao cliente com o status
        // HTTP 200: OK (implícito)
        res.send(result)
    }
    catch (error) {
        // Deu errado: exibe o erro no console do back-end
        console.error(error)

        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveByName = async function (req, res) {
    const include = includeRelations(req.query)
    try {
        console.log(req.params.nome)
        const result = await prisma.especie.findFirst({
            
            where: {
                nome: req.params.nome
            },
            include: include
        })
        if (result) res.send(result) // HTTP 200 implícito
        else res.status(404).end() // Cadastro não encontrado
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function (req, res) {
    const include = includeRelations(req.query)
    try {
        const result = await prisma.especie.findUnique({
            where: {
                id: req.params.id
            },
            include
        })

        if (result) res.send(result)

        else res.status(404).end()
    }
    catch (error) {
        console.error(error)

        res.status(500).send(error)
    }
}

controller.update = async function (req, res) {
    try {
        const result = await prisma.especie.update({
            where: {id: req.params.id},
            data: req.body
        })

        if (result) res.status(204).send(result)
        else res.status(404).end()
    }
    catch (error) {
        // Deu errado: exibe o erro no console do back-end
        console.error(error)

        // Envia o erro ao front-end, com status 500
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async function (req, res) {
    try {
        // Busca o documento a ser excluído pelo id passado
        // como parâmetro e efetua a exclusão caso encontrado
        await prisma.especie.delete({
            where: {id: req.params.id}
        })


        // Encontrou e exclui ~> HTTP 204: No Content
         res.status(204).end()
    }
    catch (error) {
        if(error?.error === 'P2025') {
            // Não encontrou e não excluiu ~> HTTP 204: Not Found
            res.status(404).end()
        }
        else {
                   // Deu errado: exibe o erro no console do back-end
           console.error(error)

           // Envia o erro ao front-end, com status 500
           // HTTP 500: Internal Server Error
           res.status(500).send(error)
        }
    }
}

export default controller