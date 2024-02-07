require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 3500 
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('../config/routes')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const apiDocs = YAML.load('./api-docs.yaml')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDocs));

app.listen(port, () => {
    console.log(`server running at port ${port}`);
})

module.exports = app