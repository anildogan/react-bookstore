import React, { useEffect } from "react";
import {PublishersContext} from "../contexts/PublishersContext";
import {BooksContext} from "../contexts/BooksContext";
import { BookServiceImpl } from "../services/BooksServiceImpl";
import Form from 'react-bootstrap/Form'

function PublisherSelectFilter(props) {
    const publishersState= React.useContext(PublishersContext);
    const booksState= React.useContext(BooksContext);

    let bookService = new BookServiceImpl();

    let publishersSelectChanged = (event: any) =>  {
        const publisherId = event.target.value;
        if(publisherId === "0") {
            bookService.getAllBooks().then(books => {
                booksState?.setBooksData(books.data);
            })   
        }
        else {
            bookService.filterBooksByPublisherId(publisherId).then(books => {
                booksState?.setBooksData(books.data);
            })   
        }
    }
    return(
        <Form.Group>
            <Form.Label>Filter Publishers</Form.Label>
            <Form.Control defaultValue={"0"} onChange={publishersSelectChanged} as="select">
                <option value={"0"} >No Filter</option>
                {publishersState?.publishersData?.map(t=> {
                        return (
                        <option value={t.id} key={t.id} >{t.name}</option>
                            )
                            })}
            </Form.Control>
        </Form.Group>
    );
}

export default PublisherSelectFilter;