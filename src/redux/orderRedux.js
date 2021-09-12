import Axios from 'axios';

// selectors
export const getAllOrders = ({ orders }) => orders;

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const ADD_ORDER = createActionName('ADD_ORDER');

// action creators
export const addOrder = payload => ({ payload, type: ADD_ORDER });

// thunk creators
export const fetchAddOrder = newOrder => {

  return async dispatch => {
    try {
      let res = await Axios.post(`http://localhost:8000/api/orders`, newOrder);
      dispatch(addOrder(res));
    }
    catch(err) {
      dispatch('Error:', err.message);
    }
  };
};

// reducer
export const ordersReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_ORDER: {
      return {
        ...statePart,
        data: [action.payload],
      };
    }
    default:
      return statePart;
  }
};
