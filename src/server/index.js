const express = require('express')
const cors = require('cors')

const port = '3000'
const app = express()

app.use(cors());
app.use(express.static(__dirname + '/../../dist/'));

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})

console.log('Directory: ' + __dirname)
app.get('/', (req,res) => {
    res.sendFile('/dist/index.html', { root: __dirname + '/../..' })
})