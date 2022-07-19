import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes.js';
const app = express();

app.use(express.json())
app.use('/api/user', router)

mongoose.connect('mongodb+srv://sajib:1234@cluster0.uw6p9.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() => console.log('connected db and port'))
    .catch((err) => console.log(err))


