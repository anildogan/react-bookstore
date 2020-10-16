import React, { useState, createContext, useEffect } from 'react'
import Author from '../models/Author'
import { BookServiceImpl } from '../services/BooksServiceImpl';


type AuthorsContextType = {
    authorsData: Author[];
    setAuthorsData: (authorsData: Author[]) => void;
  };


export const AuthorsContext = createContext<AuthorsContextType | undefined>(undefined);

export const AuthorsProvider = props =>  {
    const [authorsData, setAuthorsData] = useState<Author[]>([]);
    let booksService = new BookServiceImpl();

    useEffect(() => {
        booksService.getAllAuthors().then(t => {
            setAuthorsData(t.data);
        })
    }, []);
    return (
        <AuthorsContext.Provider value={{authorsData, setAuthorsData}}>
            {props.children}
        </AuthorsContext.Provider>
    )
}

export default {AuthorsProvider};