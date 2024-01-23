import Author from "./Author";

const guilherme = new Author('Guilherme')

const newPost = guilherme.addPost('Conteudo do post')

newPost.addComment(guilherme.name, 'conteudo do comentario')
