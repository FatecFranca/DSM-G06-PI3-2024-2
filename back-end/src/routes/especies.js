import { Router } from 'express'
import controller from '../controllers/especies.js'

const router = Router ()

router.get('/', controller.retrieveAll)
router.post('/', controller.create)

export default router