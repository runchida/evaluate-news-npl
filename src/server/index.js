const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var aylienTextAPI = require('aylien_textapi');

// constants for server and APIs
const port = '8080'

// Initiate services
const app = express()
app.use(cors())
app.use(express.static(__dirname + '/../../dist/'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Setup Aylien
const AylienNewsApi = require("aylien-news-api");

const defaultClient = AylienNewsApi.ApiClient.instance;

let app_id = defaultClient.authentications["app_id"];
app_id.apiKey = '2f996113'

let app_key = defaultClient.authentications["app_key"];
app_key.apiKey = '4d8951f9af6610bb82d1a35ee82bd262'

aylienApi = new AylienNewsApi.DefaultApi();

// Setup server
app.listen(port, () => {
    console.log('Server running on port: ' + port)
})

console.log('Directory: ' + __dirname)
app.get('/', (req, res) => {
    res.sendFile('/dist/index.html', { root: __dirname + '/../..' })
})

// POST request handler for button
app.post('/mothership', getToAylien)

async function getToAylien(req, res) {
    console.log('POST incoming')
    console.log(req.body)
    var opts = { titel: req.body.text }
    let stories = [];
    var result = aylienApi.listStories(opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            res.send(data)
        }
    } )
}
