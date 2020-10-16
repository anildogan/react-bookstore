import React, { useState, createContext, useEffect } from 'react'
import Book from '../models/Book'
import { BookServiceImpl } from '../services/BooksServiceImpl';

type BooksContextType = {
    booksData: Book[];
    setBooksData: (booksData: Book[]) => void;
    paginatedBooks : Book[];
    setPaginatedBooks: (paginatedBooks: Book[]) => void;
  };
  
export const BooksContext = createContext<BooksContextType | undefined>(undefined);
export const BooksProvider = props =>  {
    const [booksData, setBooksData] = useState<Book[]>([]);
    const [paginatedBooks, setPaginatedBooks] = useState<Book[]>([]);
    let bookService = new BookServiceImpl();

    useEffect(() => {
        bookService.getAllBooks().then(t => {
            setBooksData(t.data);
        })
    }, []);

    return (
        <BooksContext.Provider value={{booksData, setBooksData, paginatedBooks, setPaginatedBooks}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default {BooksProvider};