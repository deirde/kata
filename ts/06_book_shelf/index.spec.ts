import { BookShelf } from './index';

it('adding books', () => {
    var bookShelf = new BookShelf();
    bookShelf.addBook('Pride and Prejudice', 'Jane Austen');
    bookShelf.addBook('Hamlet', 'William Shakespeare');

    expect(bookShelf.getAllBooks()).toEqual([
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'Hamlet', author: 'William Shakespeare' },
    ]);
});

it('adding and removing books', () => {
    var bookShelf = new BookShelf();
    bookShelf.addBook('Pride and Prejudice', 'Jane Austen');
    bookShelf.addBook('Hamlet', 'William Shakespeare');
    bookShelf.removeBookByIndex(0);

    expect(bookShelf.getAllBooks()).toEqual([
        { title: 'Hamlet', author: 'William Shakespeare' },
    ]);
});