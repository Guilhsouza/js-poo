var Book = /** @class */ (function () {
    function Book(title, pages) {
        this.title = title;
        this.pages = pages;
        this.published = false;
    }
    ;
    Book.prototype.publish = function () {
        this.published = true;
    };
    return Book;
}());
var eragon = new Book("Eragon", 400);
var eldest = new Book("Eldest", 300);
eragon.publish();
console.log(eragon);
console.log(eldest);
