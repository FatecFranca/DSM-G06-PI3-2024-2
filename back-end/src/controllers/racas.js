import prisma from '../database/client.js'

const controller = {}
const include = {especie: true}

controller.create = async function (req,res) {
    try {
        await prisma.raca.create ({data: req.body})
        res.status(201).end()
    }
    catch(error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function (req, res) {
    try {
        const result = await prisma.raca.findMany({
            include: include,
            orderBy: [{nome: 'asc'}]
        })
        res.send(result)
    }
    catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function (req, res) {
    try {
        const result = await prisma.raca.findUnique({
            where: {
                id: req.params.id
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

controller.update = async function (req, res) {
    try {
        const result = await prisma.raca.update({
            where: {id: req.params.id},
            data: req.body
        })

        if (result) res.status(204).send(result)
        else res.status(404).end()
    }
    catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.delete = async function (req, res) {
    try {
        await prisma.raca.delete({
            where: {id: req.params.id}
        })
    }
    catch(error) {
        if(error?.error === 'P2025') {
            res.status(404).end()
        }
        else {
            console.error(error)

            res.status(500).send(error)
        }
    }
}
export default controller