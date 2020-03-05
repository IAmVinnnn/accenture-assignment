import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../actions/book";
class AddBook extends PureComponent {
  state = {
    form_data: {
      title: {
        value: null,
        rule: {
          required: true
        },
        error: false
      },
      description: {
        value: null,
        rule: {
          required: true
        },
        error: false
      },
      author: {
        value: null,
        rule: {
          required: true
        },
        error: false
      },
      quantity: {
        value: null,
        rule: {
          required: true,
          number: true
        },
        error: false,
        number: true
      }
    }
  };

  // Form submit handler
  handleSubmit = event => {
    event.preventDefault();
    const form_data = { ...this.state.form_data };
    let is_valid = true;
    for (let key in form_data) {
      if (form_data[key].rule.required && !form_data[key].value) {
        form_data[key].error = true;
        if (is_valid) {
          is_valid = false;
        }
      }
    }
    this.setState({
      form_data: form_data
    });
    if (!is_valid) {
      return false;
    }
    this.props.addBook({
      title: form_data.title.value,
      description: form_data.description.value,
      author: form_data.author.value,
      quantity: form_data.quantity.value
    });
    this.props.history.push("/");
  };

  // Form fields change handler
  inputChangeHandler = (event, element) => {
    const form_data = { ...this.state.form_data };
    const form_element = { ...form_data[element] };
    form_element.error = false;
    if (form_element.rule.required) {
      if (!event.target.value.trim()) {
        form_element.error = true;
      }
      if (form_element.rule.number) {
        const is_number = event.target.value.match(/^[0-9]+$/);
        if (!is_number) {
          form_element.error = true;
        }
      }
    }
    form_element.value = event.target.value.trim();
    form_data[element] = form_element;
    this.setState({
      form_data: form_data
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="addbook.title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            style={
              this.state.form_data.title.error
                ? { borderColor: "#ff0000" }
                : null
            }
            type="text"
            placeholder="Title"
            onChange={event => this.inputChangeHandler(event, "title")}
          />
        </Form.Group>
        <Form.Group controlId="addbook.description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            style={
              this.state.form_data.description.error
                ? { borderColor: "#ff0000" }
                : null
            }
            type="text"
            placeholder="Description"
            onChange={event => this.inputChangeHandler(event, "description")}
          />
        </Form.Group>
        <Form.Group controlId="addbook.author">
          <Form.Label>Auther</Form.Label>
          <Form.Control
            style={
              this.state.form_data.author.error
                ? { borderColor: "#ff0000" }
                : null
            }
            type="text"
            placeholder="Author"
            onChange={event => this.inputChangeHandler(event, "author")}
          />
        </Form.Group>
        <Form.Group controlId="addbook.quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            style={
              this.state.form_data.quantity.error
                ? { borderColor: "#ff0000" }
                : null
            }
            type="text"
            placeholder="Quantity"
            onChange={event => this.inputChangeHandler(event, "quantity")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        <Button variant="danger" type="button">
          <Link style={{ textDecoration: "none", color: "#ffffff" }} to="/">
            Cancel
          </Link>
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: book_data => dispatch(actions.addBook(book_data))
  };
};
export default connect(null, mapDispatchToProps)(AddBook);
