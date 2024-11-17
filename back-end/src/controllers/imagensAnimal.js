import prisma from '../database/client.js'
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { includeRelations } from '../lib/utils.js'

const controller = {}

controller.upload = async function (req, res) {
    try {
        let filePath;
        const uploadPath = path.resolve('src/public/imagens/animais');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, uploadPath);
            },
            filename: function (req, file, cb) {
                const uniqueName = `${Date.now()}-${file.originalname}`;
                cb(null, uniqueName);
            }
        });

        const upload = multer({ storage }).single('file');

        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).send({ error: 'Erro no Multer', details: err });
            } else if (err) {
                return res.status(500).send({ error: 'Erro inesperado', details: err });
            }

            filePath = `https://dsm-g06-pi3-2024-2.onrender.com/public/imagens/animais/${req.file.filename}`;

            try {
                await prisma.imagemAnimal.create({
                    data: {
                        animal_id: req.params.idAnimal,
                        src: filePath
                    }
                });

                return res.status(200).send({
                    message: 'Upload realizado com sucesso',
                    filePath,
                });
            } catch (error) {
                console.error('Erro ao salvar imagem no banco:', error);
                return res.status(500).send({ error: 'Erro ao salvar imagem no banco de dados', details: error });
            }
        });

    } catch (error) {
        console.error('Erro no upload:', error);
        res.status(500).send({ error: 'Erro no servidor', details: error });
    }
};

controller.create = async function (req, res) {
    try {
        await prisma.imagemAnimal.create({
            data: req.body
        });
        res.status(201).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function (req, res) {
    const include = includeRelations(req.query)
    try {
        const result = await prisma.imagemAnimal.findMany({
            orderBy: [{ animal_id: 'asc' }],
            include
        })
        res.send(result) // HTTP 200 ~> IMPLÍCITO
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveOne = async function (req, res) {
    const include = includeRelations(req.query)
    try {
        const result = await prisma.imagemAnimal.findUnique({
            where: {
                id: req.params.id
            },
            include
        })
        if (result) res.send(result)
        else res.status(404).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.retrieveAllOf = async function (req, res) {
    const include = includeRelations(req.query)
    try {
        const result = await prisma.imagemAnimal.findMamy({
            where: {
                animal_id: req.params.id
            },
            include
        })
        if (result) res.send(result)
        else res.status(404).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}


controller.update = async function (req, res) {
    try {
        const result = await prisma.imagemAnimal.update({
            where: {
                id: req.params.id
            },
            data: req.body
        })
        if (result) res.send(result)
        else res.status(404).end()
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

controller.delete = async function (req, res) {
    try {
        await prisma.imagemAnimal.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(204).end()
    } catch (error) {
        if (error?.error === 'P2025') {
            res.status(404).end()
        } else {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

export default controller