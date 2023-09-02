import cors from 'cors'
import express from 'express'
import expressSession from "express-session"
import morgan from 'morgan'
import passport from 'passport'
import { connectionMongo } from './src/connections'
import middlewares from './src/middlewares'
import router from './src/routers'

const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(router)
// Passport setting
app.use(expressSession({ secret: middlewares.secrets.JWT_SECRENT }));
// Khởi tạo passport
app.use(passport.initialize());
app.use(passport.session());
connectionMongo

// PORT RUN
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, (req, res) => {
  console.log(`Serve at http://localhost:${PORT}`)
})
