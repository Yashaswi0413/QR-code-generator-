const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const router = require('./routes')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(router)


app.get('/' , (req,res) => {
    res.send('Hi from the server')
})

app.listen(PORT , ()=> console.log(`Listening on the PORT ${PORT}`))