const PORT = 3000

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors')
const mainRoute = require('./routes/main')
const connectToDatabase = require('./database/connect');
const gamesRouter = require('./routes/games')

const app = express()
connectToDatabase()
app.use(
    //cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
)

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
  }) 