// https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn
/*
BOOK SHELF

Create a Book constructor that has two properties:
1. Property Title
2. Property Author
3. A method named getTitle that returns: "Title: " + the instance title.
4. A method named getAuthor that returns: "Author: " + the instance author.
Instantiate this constructor by creating 2 new books.

Examples
bookShelf.getAllBooks() ➞ [{ title: 'AA', author: 'AB' }, { title: 'BA', author: 'BB' },]
*/

class Book {
    title: string;
    author: string;
    constructor(title: string, author: string) {
        this.author = author;
        this.title = title
    }
}

export class BookShelf {
    books: Book[] = [];

    addBook(title: string, author: string) {
        return this.books.push({
            title,
            author,
        });
    }

    removeBookByIndex(index: number) {
        return this.books.splice(index, 1);
    }

    getBookByIndex(index: number) {
        return this.books[index];
    }

    getAllBooks() {
        return this.books;
    }

    getTitleByIndex(index: number) {
        return this.books[index].title;
    }

    getAuthorByIndex(index: number) {
        return this.books[index].author;
    }
}