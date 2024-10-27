const express = require("express")
const cors  = require("cors")
const UsersModel = require('./models/Users')
const app = express()
app.use(express.json())
app.use(cors())

//Connecting mongodb atlas
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yashudkl:0MMNikPcsjiCzQJQ@u-a.gaphj.mongodb.net/Upamanyu-Academy?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB - Upamanyu-Academy'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

//Post request API-integration
app.post('/Signup',(req,res)=>{
UsersModel.create(req.body)
.then(users => res.json(users))
.catch(err => res.json(err))
})

//Server runs at 3001
app.listen(3001,()=>{
    console.log('server is running')
})