"use strict";
//221233-CHANONA AQUINO CARLOS EDUARDO
//213537-RUIZ ROBLES PEDRO JOSAFAT
//221260-Ramirez Nucamendi Luis Antonio
//221228-Albores Madrigal Yahir Alberto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const dotenv_1 = require("dotenv");
const videogames_1 = require("./product/infrastructure/routes/videogames");
(0, dotenv_1.config)();
const PORT = process.env.API_PORT;
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use("/videogames", videogames_1.router);
app.listen(PORT, () => {
    signale.success(`SERVER LISTENING ON PORT: ${PORT}`);
});
