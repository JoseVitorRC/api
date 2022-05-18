//config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rota inicial ==> endpoint
app.get('/',(req,res)=>{
    //mostrar requisição
    res.json({
        message:'Oi express!!!'
    })
})

//entregar uma porta
const DB_USER = 'josevitor'
const DB_PASSWORD = encodeURIComponent('0TdwLGTponaZVAga')

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nzims.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)

.then(()=>{
    console.log('Conectados ao DB!')
    app.listen(3000)
})

.catch((err)=>{
    console.log(err)
})

