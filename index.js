import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { connectionMongo } from './src/connections'
import router from './src/routers'

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(router)
connectionMongo

// PORT RUN
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, (req, res) => {
  console.log(`Serve at http://localhost:${PORT}`)
})
