const PORT = 3000

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors')
const mainRoute = require('./routes/main')
const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/api')


const app = express()
connectToDatabase()
app.use(
    //cors,
    bodyParser.json(),
    mainRoute,
    apiRouter,
    express.static(path.join(__dirname, 'public'))

)

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
  }) 