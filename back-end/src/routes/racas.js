import { Router } from 'express'
import controller from '../controllers/racas.js'

const router = Router()

router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)

router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router