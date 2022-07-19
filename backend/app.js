import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blog-routes.js';
import router from './routes/user-routes.js';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/user', router)
app.use('/api/blog', blogRouter)

mongoose.connect('mongodb+srv://sajib:1234@cluster0.uw6p9.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() => console.log('connected db and port'))
    .catch((err) => console.log(err))


