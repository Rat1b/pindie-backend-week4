const createGame = require('../middlewares/games')

const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const {sendAllGames,sendGameCreated} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games",findAllGames,createGame,sendGameCreated);
module.exports = gamesRouter; 