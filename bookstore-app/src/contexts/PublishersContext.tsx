import React, { useState, createContext, useEffect } from 'react'
import Publisher from '../models/Publisher'
import { BookServiceImpl } from '../services/BooksServiceImpl';


type PublishersContextType = {
    publishersData: Publisher[];
    setPublishersData: (publishersData: Publisher[]) => void;
  };


export const PublishersContext = createContext<PublishersContextType | undefined>(undefined);

export const PublishersProvider = props =>  {
    const [publishersData, setPublishersData] = useState<Publisher[]>([]);

    let booksService = new BookServiceImpl();


    useEffect(() => {
        booksService.getAllPublishers().then(t => {
            setPublishersData(t.data);
        })
    }, []);
    return (
        <PublishersContext.Provider value={{publishersData, setPublishersData}}>
            {props.children}
        </PublishersContext.Provider>
    )
}

export default {PublishersProvider};