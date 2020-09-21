import 'dotenv/config';
import cors from 'cors';
import express from 'express'
import models from './models'
import routes from './routes'

const app = express()
const port = process.env.PORT || 7000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.context = {
        models
    }
    next();
})

app.use('/accounts', routes.accounts)
app.use('/customers', routes.customers)

app.get('/', (req, res) => res.send('Solstice Assessment API v1'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))