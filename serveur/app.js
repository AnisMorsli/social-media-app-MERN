import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import storyRouter from './routes/stories.js'
const app = express()

// bodyParser to send http request from server to client and vise versa.
app.use(bodyParser.json({ limit : '32mb',extended : true}))
app.use(bodyParser.urlencoded({ limit : '32mb',extended : true}))

// this middelwere is used to connect serveur and client like react that uses node.js on client side 
app.use(cors())

app.use("/stories", storyRouter)
//database connexion
const Mongo_URI = "mongodb+srv://anis:admin@cluster0.8qgzd.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.port || 3001

const connectDB =async () =>{
    try{
        await mongoose.connect(Mongo_URI)
        app.listen(port, ()=>{
            console.log(`serveur is up on ${port}`)
        })
    }
    catch(err) {
        console.log("connexion failed ",err.message)

    }
}
connectDB()
mongoose.connection.on("open",()=> console.log('connexion to database was successful'))
mongoose.connection.on("error",(err)=> console.log(err))