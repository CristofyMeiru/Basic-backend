import express, { Application } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectionDB'
dotenv.config()

const app: Application = express()
const port: number = Number(process.env.PORT)

//Config
app.use(express.json())

//Routes
    //Add your routes hehe

//Init database
connectDB()

app.listen(port, ()=> {
    console.log("Server is running...\nhttp://localhost:" + port)
})