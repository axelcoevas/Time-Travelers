export const initialState = {
  basket: []
};

//  Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((acum, item) => item.price + acum, 0);


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_USERDATA":
      return {
        ...state,
        userData: action.userdata
      }
    case "SET_PROFILEPICTURE":
      return {
        ...state,
        userPicture: action.userpicture
      }
    default:
      return state;
  };
};

export default reducer;