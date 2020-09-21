import { Router } from 'express'

const router = Router()

// Customer info endpoint
router.get('/', (req, res) => res.send(req.context.models.customers))

// Create new customer
// test with:  curl -X POST -H "Content-Type:application/json" http://localhost:7000/customers -d '{"first_name":"Bob"}
router.post('/', (req, res) => {
    const id = 51;
    const customer = {
        id: id,
        first_name: req.body.first_name,
        active: 1,
    }

    req.context.models.customers[id] = customer
    
    return res.send(customer)
})

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