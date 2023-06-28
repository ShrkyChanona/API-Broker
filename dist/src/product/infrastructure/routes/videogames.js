"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const dependencies_1 = require("../dependencies");
exports.router = (0, express_1.Router)();
exports.router.get("/", dependencies_1.videogamesController.getVideogames.bind(dependencies_1.videogamesController));
exports.router.post("/saveVideogames", dependencies_1.videogamesController.createVideogame.bind(dependencies_1.videogamesController));
