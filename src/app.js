const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send({
        data: 'hello 123'
    })
})

app.listen(port,()=>{
    console.log('port: ' + port);
})