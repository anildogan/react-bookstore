import React from 'react';
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BooksContext} from '../contexts/BooksContext';
import {AuthorsContext} from '../contexts/AuthorsContext';
import {PublishersContext} from '../contexts/PublishersContext';
import { BookServiceImpl } from '../services/BooksServiceImpl';

function DetailBook() {
    let { bookId } = useParams();
   
    const booksState= React.useContext(BooksContext);
    const authorsState= React.useContext(AuthorsContext);
    const publishersState= React.useContext(PublishersContext);

    let book = booksState?.booksData.find(t => {
        return t.id === bookId;
    })

    return (
        <div >
            <br/>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                <Card>
                    <Card.Header>
                        <h3>{book?.bookName}</h3>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            <span style={{fontWeight: 'bold'}}>Author: {' '}</span>
                            {(authorsState?.authorsData.find(t => t.id === book?.authorId))?.name}
                            {' '}
                        </p>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Publisher: {' '}</span>
                            {(publishersState?.publishersData.find(t => t.id === book?.publisherId))?.name}
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            {book?.description}
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                </Col>

            </Row>
            
        </div>
       
    )
}
export default DetailBook;