import React, { Fragment, PureComponent } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BookItem from "../components/BookItem";
class Listing extends PureComponent {
  render() {
    return (
      <Fragment>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.length ? (
              this.props.books.map(book => (
                <BookItem key={book.id} book={book} />
              ))
            ) : (
              <tr className="text-center">
                <td colSpan="5">No book available!</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button variant="dark" size="sm">
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to="/add-book"
          >
            Add New
          </Link>
        </Button>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.books
  };
};
export default connect(mapStateToProps)(Listing);
