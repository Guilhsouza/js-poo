"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("./Post"));
class Author {
    constructor(name, posts = []) {
        this.name = name;
        this.posts = posts;
        this.name = name;
    }
    addPost(content) {
        const post = new Post_1.default(this.name, content);
        this.posts.push(post);
        return post;
    }
}
exports.default = Author;
