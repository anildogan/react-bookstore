import React from 'react';
import {withRouter} from 'react-router-dom';
import BooksTable from './BooksTable';
import AuthorSelectFilter from './AuthorSelectFilter';
import PublisherSelectFilter from './PublisherSelectFilter';
import SearchBook from './SearchBook';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookTablePagination from './BookTablePagination';

function Books(props){    
    return (
    <div>
        <br/>
    <Row>
        <Col xs={1} sm={1} md={1}></Col>
        <Col sm={4} md={4}>
            <SearchBook></SearchBook>
        </Col>
        <Col sm={3} md={3}>
            <AuthorSelectFilter></AuthorSelectFilter>
        </Col>
        <Col sm={3} md={3}>
            <PublisherSelectFilter></PublisherSelectFilter>
        </Col>
    </Row>
    <Row>
        <Col xs={1} sm={1} md={1}></Col>
        <Col sm={10} md={10}>
            <BooksTable></BooksTable>
        </Col>
    </Row>
    <Row>
        <Col sm={5} md={5}></Col>
        <Col sm={5} md={5}>
            <BookTablePagination limit={5}></BookTablePagination>
        </Col>
    </Row>
    </div>
    )
}

export default withRouter(Books);