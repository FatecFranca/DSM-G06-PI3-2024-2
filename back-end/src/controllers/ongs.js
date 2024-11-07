import prisma from '../database/client.js'
import { includeRelations } from '../lib/utils.js'

const controller = {}

controller.create = async function (req, res) {

    const { imagens, ...ongData } = req.body
    let ongCadastrada;

    try {
        ongCadastrada = await prisma.ong.create({
            data: ongData
        })
        res.status(201).end()
        console.log("Ong cadastrada com sucesso!")
    } catch (error) {
        console.error(error)
        res.status(500).send(error)

    }

    if (imagens) {
        try {
            await Promise.all(
                imagens.map((imagem) =>
                    prisma.imagemOng.create({
                        data: {
                            src: imagem,
                            ong_id: ongCadastrada.id,
                        },
                    })
                )
            )

            // Faz o cadastro dos animais utilizando as imagens enviadas
            res.status(201).end()
            console.log('Imagens da ONG cadastrada com sucesso')
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

controller.retrieveAll = async function (req,res) {
    const include = includeRelations(req.query)
    try {
        const result = await prisma.ong.findMany({
            orderBy: [{razao_social: 'asc'}],
            include
        })
        res.send(result) // HTTP 200 ~> Implícito
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function (req,res) {
    const include = includeRelations(req.query)
    try {
        const result = await prisma.ong.findUnique({
            where: {
                id: req.params.id
            },
            include
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