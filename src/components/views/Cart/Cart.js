import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Cart.module.scss';


//const cartProducts = JSON.parse(localStorage.getItem('cart')).products;
// console.log('dodane produkty:', cartProducts);


const clearCart = () => {
  localStorage.removeItem('cart');
};

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Cart</h2>
    {children}
    <p> cartProducts </p>
    <p>
      <button type="button" onClick={clearCart}>
        Remove All Items
      </button>
    </p>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Cart,
  Component as CartComponent,
};
