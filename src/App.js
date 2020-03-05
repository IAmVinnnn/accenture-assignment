import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBook from "./containers/AddBook";
import Listing from "./containers/Listing";
function App() {
  return (
    <Router>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Book Liberary</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route path="/add-book" component={AddBook} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
