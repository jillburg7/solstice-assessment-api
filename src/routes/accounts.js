import { Router } from 'express'

const router = Router()

// Account info endpoint
router.get('/', (req, res) => res.send(req.context.models.accounts))
router.get('/:accountId', (req, res) => {
    const account = req.context.models.accounts.find(element => element.id === Number(req.params.accountId))
    return res.send(account)
})

export default router