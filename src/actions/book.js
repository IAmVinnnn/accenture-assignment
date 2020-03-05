import * as actionType from "./constants";
let book_id = 0;
export const addBook = bookData => {
  return {
    type: actionType.ADD_BOOK,
    book_id: ++book_id,
    ...bookData
  };
};
