import Comments from "./Comment.js"

class Post {
    constructor(
        public postAuthor: string,
        public content: string,
        public comments: object[] = []
    ) {
        this.content = content
    }

    addComment(author: string, content: string) {
        const newComment = new Comments(author, content)
        this.comments.push(newComment)
    }
}

export default Post