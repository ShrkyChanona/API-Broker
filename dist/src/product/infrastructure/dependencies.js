"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videogamesController = void 0;
const VideogamesRepository_1 = require("./entityManager/VideogamesRepository");
const VideogamesController_1 = require("./controllers/VideogamesController");
const SaveVideogamesUseCase_1 = require("../application/SaveVideogamesUseCase");
const GetAllVideogamesUseCase_1 = require("../application/GetAllVideogamesUseCase");
//repo
const videogamesRepo = new VideogamesRepository_1.VideogamesRepository();
//use case
const saveNewVideogameUC = new SaveVideogamesUseCase_1.SaveVideogamesUseCase(videogamesRepo);
const getGamesUC = new GetAllVideogamesUseCase_1.GetAllGamesUseCase(videogamesRepo);
//controller
exports.videogamesController = new VideogamesController_1.VideogamesController(saveNewVideogameUC, getGamesUC);
