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
    console.log(typeof "asdf")

    let formdata = new FormData();
    formdata.append('key', process.env.API_KEY);

    // meaningcloud responses correctly
    // formdata.append('txt', "Hello, this is a text");
    // response with error 201
    formdata.append('txt', req.body);
    formdata.append('lang', 'auto');
    console.log(formdata)

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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });      
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