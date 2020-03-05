import * as actionType from "../actions/constants";
const reducer = (state = [], action) => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return [
        ...state,
        {
          id: action.book_id,
          title: action.title,
          description: action.description,
          author: action.author,
          quantity: action.quantity
        }
      ];
    default:
      return state;
  }
};
export default reducer;
