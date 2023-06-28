"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesRepository = void 0;
const videogames_1 = require("../../domain/entities/videogames");
const mysql_1 = require("../../../database/mysql");
class VideogamesRepository {
    getAllVideogames() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM videogames";
            try {
                const [result] = yield (0, mysql_1.query)(sql, []);
                const resultGames = Object.values(JSON.parse(JSON.stringify(result)));
                return resultGames.map((videogame) => new videogames_1.Videogames(videogame.id, videogame.title, videogame.date, videogame.console, videogame.enterprise));
            }
            catch (error) {
                return null;
            }
        });
    }
    saveVideogame(title, date, console, enterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO videogames_store.videogames(title,release_date,console,enterprise) VALUES (?, ?, ?, ?)";
            const params = [title, date, console, enterprise];
            try {
                //El objeto Result es un objeto que contiene info generada de la BD
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new videogames_1.Videogames(result.insertId, title, date, console, enterprise);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.VideogamesRepository = VideogamesRepository;
