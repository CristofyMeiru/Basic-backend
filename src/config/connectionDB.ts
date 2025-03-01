import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const dbURL: string = String(process.env.DB_URL)

function connectDB(): void {
    mongoose.connect(dbURL).then(()=> {
        console.log("Database connection success!")
    }).catch((err)=> {
        console.log(err)
    })
}

export default connectDB