import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import linkedinRouter from './routers/linkedin.router.js'

export const app = express()

app.use(cors({
    credentials: true,
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: true,
}))

app.use('/api/linkedin', linkedinRouter)

app.listen(8080, () => console.log('Server Up!'))