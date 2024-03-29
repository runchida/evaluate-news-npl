const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const axios = require('axios')
const FormData = require('form-data')
const { data } = require('jquery')
dotenv.config();

// constants for server and APIs
const port = '3000'
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'

// Initiate services
const app = express()
app.use(cors())
app.use(express.static(__dirname + '/../../dist/'))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())

// Setup server
app.listen(port, () => {
    console.log('Server running on port: ' + port)
})

console.log('Directory: ' + __dirname)
app.get('/', (req, res) => {
    res.sendFile('/dist/index.html', { root: __dirname + '/../..' })
})

// POST request handler for button
app.post('/mothership', onPost)

async function onPost(req, res) {
    console.log('POST incoming: ')

    let formdata = new FormData();
    formdata.append('key', process.env.API_KEY);
    formdata.append('txt', req.body);
    formdata.append('lang', 'auto');

    let config = {
        method: 'post',
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        headers: { 
          ...formdata.getHeaders()
        },
        data : formdata
      };
      axios(config)
      .then(function (response) {
        console.log(response)
        res.send(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });      
}
