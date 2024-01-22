class Book {
    title: string
    pages: number
    published: boolean
    constructor(title: string, pages: number) {
        this.title = title
        this.pages = pages
        this.published = false
    };

    publish() {
        this.published = true
    }
}

const eragon = new Book("Eragon", 400);
const eldest = new Book("Eldest", 300);

eragon.publish();

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book);
