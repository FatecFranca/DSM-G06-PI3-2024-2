import prisma from '../database/client.js'

const controller = {}

controller.create = async function (req, res) {
    try {
        await prisma.adocao.create ({
            data: req.body
        })
        res.status(201).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function (req, res) {
    try {
        const result = await prisma.adocao.findMany({
            orderBy: {nome_adotante: "asc"}
        })
        
        res.send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function (req, res) {
    try {
        const result = await prisma.adocao.findUnique({
            where: {
                id: req.params.id
            }
        })
        if(result) res.send(result)
            else res.status(404).end()

    } catch (error){
        console.error(error)
        res.status(500).send(error)
    }

}

export default controller