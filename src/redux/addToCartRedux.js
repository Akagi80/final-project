/*
import axios from "axios"

// selectors

// action name creator

// action types
const ADD_TO_CART  = "ADD_TO_CART";

// action creators
export const addToCart =payload => ({ payload, type: ADD_TO_CART });

// thunk creators
export const addProductToCart = id => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);

  dispatch(
    addTo_Cart({
      id: data._id,
      title: data.title,
      price: data.price,
    })
  );

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

// reducer
const cartInitialState = [];

export const cartReducer = (statePart = cartInitialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {

    }
  }
}
*/
