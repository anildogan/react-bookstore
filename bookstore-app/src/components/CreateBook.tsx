import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Book from '../models/Book';
import { AuthorsContext } from '../contexts/AuthorsContext';
import { PublishersContext } from '../contexts/PublishersContext';
import { BookServiceImpl } from '../services/BooksServiceImpl';

function CreateBook() {
    const authorsState= React.useContext(AuthorsContext);
    const publishersState= React.useContext(PublishersContext);
    const bookService = new BookServiceImpl();

    let bookCreateModel: Book = {
        id: "",
        bookName: "",
        authorId: "",
        publisherId: "",
        description: ""
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        bookService.createBook(bookCreateModel).then(t => {
            alert("Book created successfully!");
        });
      };
    const handleNameChange = (event) => {
        bookCreateModel.bookName = event.target.value;
    }
    const handleDescriptionChange = (event) => {
        bookCreateModel.description = event.target.value;
    }
    const handleAuthorChange = (event) => {
        bookCreateModel.authorId = event.target.value;
    }
    const handlePublisherChange = (event) => {
        bookCreateModel.publisherId = event.target.value;
    }
    return (
        <div>
            <br/>
        <Container fluid>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                <h1>Create new book</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter book name"
                            onChange={handleNameChange}
                            required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control onChange={handleAuthorChange} as="select">
                        <option disabled={true} selected={true}>Please select author name</option>
                        {authorsState?.authorsData?.map(t=> {
                                return (
                                    <option value={t.id} key={t.id}>{t.name}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Publisher Name</Form.Label>
                        <Form.Control onChange={handlePublisherChange} as="select">
                        <option disabled={true} selected={true}>Please select publisher name</option>
                        {publishersState?.publishersData?.map(t=> {
                                return (
                                    <option value={t.id} key={t.id}>{t.name}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        as="textarea"
                        onChange={handleDescriptionChange}
                        required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default CreateBook;