import Book from "../models/Book";

export default interface BooksService {
    getAllBooks(): Promise<any>; 
    getAllAuthors(): Promise<any>;
    getAllPublishers(): Promise<any>;

    getBookByBookId(id: string): Promise<any>;

    filterBooksByPublisherId(publisherId: string): Promise<any>;
    filterBooksByAuthorId(authorId: string): Promise<any>;
    
    createBook(book: Book): Promise<any>;

    searchBookByQuery(query: string): Promise<any>; 
  }