import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {BooksContext} from '../contexts/BooksContext';
import { BookServiceImpl } from '../services/BooksServiceImpl';
import Book from '../models/Book';

function BookTablePagination(props){
    const booksState = React.useContext(BooksContext);
    const bookService = new BookServiceImpl();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPageCount, setTotalPageCount] = useState<number>(1);
    const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    
    const limit: number = props.limit;

    let setPaginatedData = () => {
        booksState?.setPaginatedBooks(booksState?.booksData.slice((currentPage - 1) * limit, currentPage * limit));
    }
    let handleNextButtonClicked =  () => {
        setCurrentPage(currentPage + 1)
    }
    let handlePrevButtonClicked =  () => {
        setCurrentPage(currentPage - 1)
    }
    let handleFirstButtonClicked =  () => {
        setCurrentPage(1)
    }
    let handleLastButtonClicked =  () => {
        setCurrentPage(totalPageCount)
    }
    //On data source change
    useEffect(() => {
        setCurrentPage(1);
        setTotalPageCount(Math.ceil((booksState?.booksData ? booksState?.booksData.length : 0) / limit));
        populateDisableAttrs();
        setPaginatedData();
    }, [booksState?.booksData]);

    let populateDisableAttrs = () => {
        //if there is one page
        if(currentPage ==1 && totalPageCount == 1) {
            setIsFirstPage(true);
            setIsLastPage(true);
            return;
        }
        if(currentPage == 1){
            setIsFirstPage(true);
            setIsLastPage(false);
        }
        
        else if (currentPage==totalPageCount) {
            setIsFirstPage(false);
            setIsLastPage(true);
        }
        else{
            setIsFirstPage(false);
            setIsLastPage(false);
        }
    }

    //on page change
    useEffect(() => {
        populateDisableAttrs();
        setPaginatedData();
    }, [currentPage]);

    //on total page count change
    useEffect(() => {
        populateDisableAttrs();
    }, [totalPageCount]);

    return (
        <div>
        <Pagination>
            <Pagination.First onClick={handleFirstButtonClicked} disabled={isFirstPage}/>
            <Pagination.Prev onClick={handlePrevButtonClicked} disabled={isFirstPage} />
        <Pagination.Item>{currentPage}</Pagination.Item>
            <Pagination.Next onClick={handleNextButtonClicked} disabled={isLastPage} />
            <Pagination.Last onClick={handleLastButtonClicked} disabled={isLastPage} />
        </Pagination>
        </div>
    );
}

export default BookTablePagination;