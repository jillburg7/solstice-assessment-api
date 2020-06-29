import { Router } from 'express'

const router = Router()

// Customer info endpoint
router.get('/', (req, res) => res.send(req.context.models.customers))
router.get('/:customerId', (req, res) => {
    const customer = req.context.models.customers.find(element => element.id === Number(req.params.customerId))
    return res.send(customer)
})

// Customer's accounts 
router.get('/:customerId/accounts', (req, res) => {
    const custAccounts = req.context.models.accounts.filter(element => element.customer_id === Number(req.params.customerId))
    return res.send(custAccounts)
})

export default router