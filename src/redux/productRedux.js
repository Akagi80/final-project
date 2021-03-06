import { initialState } from "./initialState";
import Axios from "axios";

/* selectors */
export const getContent = ({content}) => content;
export const getAll = ({products}) => products.data;
// eslint-disable-next-line
export const getOne = ({products}, id) => products.data.filter(product => product.id == id);
export const getOneProduct = ({products}) => products.oneProduct;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_ONE_PRODUCT = createActionName('FETCH_ONE_PRODUCT');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchOneProduct = payload => ({ payload, type: FETCH_ONE_PRODUCT });

/* thunk creators */
export const fetchProducts = () => {
  return (dispatch, getState,) => {
    const state = getState();

    if(!state.products.data.length && state.products.loading.active === false){
      dispatch(fetchStarted());

      Axios
        .get('http://localhost:8000/api/products')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchProductById = (id) => {
  return (dispatch, getState,) => {
    dispatch(fetchStarted());

    Axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        dispatch(fetchOneProduct(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const productsReducer = (statePart = initialState, action = {}) => {
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
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
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
    case FETCH_ONE_PRODUCT: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        oneProduct: action.payload,
      };
    }
    default:
      return statePart;
  }
};
