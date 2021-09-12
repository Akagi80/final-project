import { initialState } from "./initialState";
import Axios from 'axios';

/* selectors */

const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_ORDER = createActionName('ADD_ORDER');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addOrder = payload => ({ payload, type: ADD_ORDER });


/* thunk creators */

export const fetchAddOrder = () => {

  return (dispatch, getState,) => {
    dispatch(fetchStarted());

    Axios
      .order(`http://localhost:8000/api/orders/add`)
      .then(res => {
        dispatch(addOrder());
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const ordersReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_ORDER: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      }
    }
    default:
      return statePart;
  }
};
