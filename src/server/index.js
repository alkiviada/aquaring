import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom";
import App from '../shared/App'
import React from 'react'

const app = express()

app.use(cors())
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); 


app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true}));

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const context = { };

  const markup = renderToString(
      <StaticRouter context={ context } location={ req.url }>
        <App />
      </StaticRouter>
  )
  console.log('haha');
  res.send(`
    <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>AquaRingEnergy</title>
        <link href="//fonts.googleapis.com/css?family=Harmattan|Julius+Sans+One|Pathway+Gothic+One" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app" class="aqr-container">${markup}</div>
      </body>
    </html>
  `) }) 
app.post('/', function (req, res) {
  console.log('i am sending response to post')
  const message = req.body
  const msg = Object.keys(message).map(k => message[k].value).join('\n') + '\n'
  const fs = require('fs');

  fs.appendFile('public/message.txt', msg, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  res.status(200).send({'message_recieved': '1'})
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
