"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comment_js_1 = __importDefault(require("./Comment.js"));
class Post {
    constructor(postAuthor, content, comments = []) {
        this.postAuthor = postAuthor;
        this.content = content;
        this.comments = comments;
        this.content = content;
    }
    addComment(author, content) {
        const newComment = new Comment_js_1.default(author, content);
        this.comments.push(newComment);
    }
}
exports.default = Post;
