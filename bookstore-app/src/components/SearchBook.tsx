import React, { useCallback } from 'react';
import { debounce } from "lodash";
import { BookServiceImpl } from '../services/BooksServiceImpl';
import {BooksContext} from '../contexts/BooksContext';

import Form from 'react-bootstrap/Form';


function SearchBook() {

    const booksState= React.useContext(BooksContext);
    let bookService = new BookServiceImpl();
    
    const searchByQuery = (query:string) => {
        if(query==="") {
            bookService.getAllBooks().then(response => {
                booksState?.setBooksData(response.data);
            })
        }
        else {
            bookService.searchBookByQuery(query).then(response => {
                booksState?.setBooksData(response.data);
            })
        }
    }
    
    const searchWithDebounce = useCallback(debounce((query: string) => {
        searchByQuery(query);
    }, 500), []);

   
 return(
     <div>
        <Form.Group>
            <Form.Label>Search Book Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Search book name"
                    onChange={eventt => searchWithDebounce(eventt.target.value)}/>
        </Form.Group>
     </div>
 );
}
export default SearchBook;