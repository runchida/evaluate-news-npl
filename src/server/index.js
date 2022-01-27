const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config();

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
app_id.apiKey = process.env.APP_ID

let app_key = defaultClient.authentications["app_key"];
app_key.apiKey = process.env.API_KEY

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

let callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: ");
        console.log("========================================");
        let stories = [];
        for (var i = 0; i < 1; i++) {
            stories.push({ titel: data.stories[i].title, link: data.stories[i].links.permalink })
            console.log(data.stories[i].links.permalink);
        }
        console.log("========================================");
        response.send()
    }
};