const express = require('express')
const path = require('pass')

const app = express()

app.get('/',(req,res) => {
    res.sendFile(path.join(_dirname, '../index.html'))
})

const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})