import Post from './Post'

class Author {
    constructor(
        public name: string,
        public posts: object[] = []
    ) {
        this.name = name
    }

    addPost(content: string) {
        const post = new Post(this.name, content)
        this.posts.push(post)
        return post
    }
}

export default Author