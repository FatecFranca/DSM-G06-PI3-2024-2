import { Router } from 'express'
import controller from '../controllers/imagensOng.js'

const router = Router()

router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.get('/ong/:id', controller.retrieveAllOf)

router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

/**Upload das imagens da ONG */
router.post('/:idong', controller.upload)

export default router