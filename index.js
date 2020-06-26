import express from 'express'
import { customers, accounts } from './initial_json.js'

const app = express()
const port = 7000

app.get('/', (req, res) => res.send('Hello World!'))

// Customer info endpoint
app.get('/customers', (req, res) => res.send(customers))
app.get('/customers/:customerId', (req, res) => {
    const customer = customers.find(element => element.id === Number(req.params.customerId))
    return res.send(customer)
})

// Account info endpoint
app.get('/accounts', (req, res) => res.send('Accounts over hurrr!'))
app.get('/accounts/:accountId', (req, res) => {
    const account = accounts.find(element => element.id === Number(req.params.accountId))
    return res.send(account)
})

// Customer's accounts 
app.get('/customers/:customerId/accounts', (req, res) => {
    const custAccounts = accounts.filter(element => element.customer_id === Number(req.params.customerId))
    return res.send(custAccounts)
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))