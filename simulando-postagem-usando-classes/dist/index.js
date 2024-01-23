"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("./Author"));
const guilherme = new Author_1.default('Guilherme');
const newPost = guilherme.addPost('Conteudo do post');
console.log(newPost);
newPost.addComment(guilherme.name, 'conteudo do comentario');
console.log(newPost);
