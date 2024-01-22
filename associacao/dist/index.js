"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Addres_1 = __importDefault(require("./Addres"));
const Person_1 = __importDefault(require("./Person"));
const address = new Addres_1.default('Rua1', 85, 'Bairro1', 'Cidade1', 'SP');
const gui = new Person_1.default('gui', address);
console.log(gui);
console.log(gui.address.fullAddress());
