import React, { useEffect } from 'react';
import {AuthorsContext} from '../contexts/AuthorsContext';
import {BooksContext} from "../contexts/BooksContext";
import { BookServiceImpl } from '../services/BooksServiceImpl';
import Form from 'react-bootstrap/Form'

function AuthorSelectFilter(props) {
    const authorsState= React.useContext(AuthorsContext);
    const booksState= React.useContext(BooksContext);

    let bookService = new BookServiceImpl();

    useEffect(() => {
        bookService.getAllAuthors().then(books => {
            authorsState?.setAuthorsData(books.data);
        })
    },
    []
    );

    let authorsSelectChanged = (event: any) =>  {
        const authorId = event.target.value;
        if(authorId === "0") {
            bookService.getAllBooks().then(books => {
                booksState?.setBooksData(books.data);
            })   
        }
        else {
            bookService.filterBooksByAuthorId(authorId).then(books => {
                booksState?.setBooksData(books.data);
            });
        }
    }
    return(
        <Form.Group>
            <Form.Label>Filter Authors</Form.Label>
            <Form.Control defaultValue={"0"} onChange={authorsSelectChanged} as="select">
            <option value={"0"}>No Filter</option>

            {authorsState?.authorsData?.map(t=> {
                    return (
                    <option value={t.id} key={t.id}>{t.name}</option>
                        )
                        })}
            </Form.Control>
        </Form.Group>
    );
    
}

export default AuthorSelectFilter;