import prisma from '../database/client.js'

const controller = {}

controller.create = async function (req, res) {
    try {
        await prisma.ong.create({
            data: req.body
        })
        res.status(201).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)

    }
}

controller.retrieveAll = async function (req,res) {
    try {
        const result = await prisma.ong.findMany({
            orderBy: [{razao_social: 'asc'}]
        })
        res.send(result) // HTTP 200 ~> Implícito
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function (req,res) {
    try {
        const result = await prisma.ong.findUnique({
            where: {
                id: req.params.id
            }
        })
        if(result) res.send(result)
            else res.status(404).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.update = async function (req,res) {
    try {
       const result = await prisma.ong.update({
            where: {
                id: req.params.id
            },
            data: req.body
        })

        if(result) res.status(204).send(result)
        else res.status(404).end()
    
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.delete = async function (req,res) {
    try {
        await prisma.ong.delete({
            where: {id: req.params.id}
        })
        res.status(204).end()
    } catch (error) {
        if(error?.error === 'P2025'){

            res.status(404).end()
        }
        else {      
            console.error(error)
            res.status(500).send(error)
        }   
    }
}

export default controller