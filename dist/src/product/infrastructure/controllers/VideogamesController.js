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
exports.VideogamesController = void 0;
class VideogamesController {
    constructor(saveNewVideogameUC, getAllVideogamesUC) {
        this.saveNewVideogameUC = saveNewVideogameUC;
        this.getAllVideogamesUC = getAllVideogamesUC;
        this.createVideogame = (req, res) => {
            try {
                const { title, date, console, enterprise } = req.body;
                this.saveNewVideogameUC.saveNewVideogame(title, date, console, enterprise);
                res.status(200).json({ message: "Videogame saved succesfully" });
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        };
    }
    ;
    getVideogames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield this.getAllVideogamesUC.getAllGames();
                console.log(games);
                if (games)
                    //Code HTTP : 200 -> Consulta exitosa
                    res.status(200).send({
                        status: "success",
                        data: games.map((games) => {
                            return {
                                id: games.id_videogame,
                                title: games.title,
                                date: games.release_date,
                                console: games.console,
                                enterprise: games.enterprise
                            };
                        }),
                    });
                else
                    res.status(400).send({
                        status: "error",
                        msn: "Ocurrio algún problema",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.VideogamesController = VideogamesController;
