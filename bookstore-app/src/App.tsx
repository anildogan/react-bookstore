import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import BookstoreNavbar from './components/BookstoreNavbar';
import Books from './components/Books';
import CreateBook from './components/CreateBook';
import DetailBook from './components/DetailBook';
import {BooksProvider} from './contexts/BooksContext';
import { AuthorsProvider } from "./contexts/AuthorsContext";
import { PublishersProvider } from "./contexts/PublishersContext";

export default function App() {
  return (
    <PublishersProvider>
    <AuthorsProvider>
    <BooksProvider>
      <Router>
            <BookstoreNavbar />
            <Switch>
              <Route path="/books">
                <Books />
              </Route>
              <Route path="/create">
                <CreateBook />
              </Route>
              <Route path="/detail/:bookId">
                <DetailBook />
              </Route>
              <Route exact path="/">
                <Redirect to="/books" />
              </Route>
            </Switch>
          </Router>
    </BooksProvider>
    </AuthorsProvider>
    </PublishersProvider>
  );
}

