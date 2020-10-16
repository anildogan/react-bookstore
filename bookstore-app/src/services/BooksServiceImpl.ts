import BookService from './BooksService';
import Book from '../models/Book'
import axios from 'axios';

export class BookServiceImpl implements BookService {
    searchBookByQuery(query: string): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/books?search=${query}`);
    }
    
    getBookByBookId(id: string): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/books/${id}`);
    }
    filterBooksByPublisherId(publisherId: string): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/books?publisherId=${publisherId}`)
    }
    filterBooksByAuthorId(authorId: string): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/books?authorId=${authorId}`)
    }
    getAllAuthors(): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/authors`);
    }
    getAllPublishers(): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/publishers`);
    }
    getAllBooks(): Promise<any> {
        return axios.get(`https://5f7773c9d5c9cb0016237473.mockapi.io/books`);
    }
    createBook(book: Book): Promise<any> {
        return axios.post('https://5f7773c9d5c9cb0016237473.mockapi.io/books', {
            bookName:book.bookName,
            publisherId: book.publisherId,
            authorId: book.authorId,
            description: book.description,
          })
    }

} 