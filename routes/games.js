

const gamesRouter = require('express').Router();

const {findAllGames,findGameById,createGame,updateGame,deleteGame,checkEmptyFields,checkIfCategoriesAvaliable,checkIfUsersAreSafe,checkIsGameExists} = require('../middlewares/games');
const {sendAllGames,sendGameCreated,sendGameById,sendGameUpdated,sendGameDeleted} = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games",findAllGames,checkEmptyFields,checkAuth,checkIsGameExists,createGame,sendGameCreated);
gamesRouter.get("/games/:id",findGameById, sendGameById);

gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
); 

gamesRouter.delete(
  "/games/:id",
  checkAuth,
  deleteGame,
  sendGameDeleted
); 


module.exports = gamesRouter; 