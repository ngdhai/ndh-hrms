const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

const addNote1 = function(file_name){
    const notes = loadNotes(file_name);
    notes.push({
        title: "file_name" + Date.now(),
        date: Date.now()
    })
    saveNotes(notes,file_name)
}
const saveNotes = function(notes,file_name){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(file_name, dataJSON)
}
const loadNotes = function(file_name){
    try {
        const dataBuffer = fs.readFileSync(file_name)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
        
}
const data = {
    title: 'Approve',
    date: Date.now()
}
const data2 = {
    title: 'Reject',
    date: Date.now()
}
const dataJSON = JSON.stringify(data)
const dataJSON2 = JSON.stringify(data2)

app.get('/approve',(req,res)=>{
    addNote1('approve.json')
    res.send({data:'approve'})
})

app.get('/reject',(req,res)=>{
    addNote1('reject.json')
    res.send({data:'reject'})
})
app.listen(port,()=>{
    console.log('port: ' + port);
})