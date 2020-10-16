import React, { useEffect } from 'react';
import {BooksContext} from '../contexts/BooksContext';
import { BookServiceImpl } from '../services/BooksServiceImpl';
import Table from 'react-bootstrap/Table';
import {withRouter} from 'react-router-dom';
import { AuthorsContext } from '../contexts/AuthorsContext';
import { PublishersContext } from '../contexts/PublishersContext';

function BooksTable(props) {
    const booksState= React.useContext(BooksContext);
    const authorsState= React.useContext(AuthorsContext);
    const publishersState= React.useContext(PublishersContext);

    let bookService = new BookServiceImpl();
    useEffect(() => {
        bookService.getAllBooks().then(books => {
            booksState?.setBooksData(books.data);
        });
        }, [])
    let redirectToDetail = (id:string)  => (event: any) => {
        props.history.push('/detail/' + id);
     }

    

    return(
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Publisher Name</th>
            </tr>
        </thead>
        <tbody>
        {booksState?.paginatedBooks?.map(book=> {
            return (
                <tr key={book.id} >
                    <td>
                    <a style={{cursor: 'pointer',color: 'blue'}} onClick={redirectToDetail(book.id)}>{book.id}</a>
                    </td>
                    <td style={{width: '400px'}}>{book.bookName}</td>
                    <td style={{width: '400px'}}>{authorsState?.authorsData?.find(author => author.id === book.authorId)?.name}</td>
                    <td style={{width: '400px'}}>{publishersState?.publishersData?.find(publisher => publisher.id === book.publisherId)?.name}</td>
        
                </tr>)
                })}
        </tbody>
    </Table>

    );
    
}

export default withRouter(BooksTable);