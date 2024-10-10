import { Router } from 'express'
import controller from '../controllers/adocoes.js'

const router = Router()

router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.post('/', controller.create)

export default router