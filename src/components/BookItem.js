import React from "react";
const BookItem = props => {
  return (
    <tr>
      <td>{props.book.id}</td>
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>{props.book.description}</td>
      <td>{props.book.quantity}</td>
    </tr>
  );
};

export default BookItem;
