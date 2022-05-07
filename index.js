'use strict';

const express = require('express')
const app = express()
const PORT = 3001
const HOST = '0.0.0.0';
const cors = require('cors')
const up = require('./upload')

app.get('/',(req, res)=>{
    res.send('Server is Running...')
})

app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET", "POST", "PUT", "DELETTE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHE, Content-Type, Authorization")
    app.use('/', cors())
    next()
})
app.post('/upload', up.single('image'), async (req, res)=>{
    

    if(req.file){
        return res.json({
            error: false,
            message: 'Uploade Realizado com Sucesso'
        })
    }

    return res.status(400).json({
        error: true,
        message: 'Formata não Suportado'
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
