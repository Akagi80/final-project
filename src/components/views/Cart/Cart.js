import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Cart.module.scss';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);

const Component = ({className}) => {
  const cartProducts = (JSON.parse(localStorage.getItem('cart')) || {});
  console.log('dodane produkty:', cartProducts.id);

  const clearCart = () => {
    localStorage.removeItem('cart');
  };

  const [setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Cart</h2>
      <p>Products:</p>
      <p className={styles.name}>Name: {cartProducts.name}</p>
      <p className={styles.price}>Price: {cartProducts.price}$</p>
      <p className={styles.quantity}>Quantity{cartProducts.quantity}</p>
      <p>
      <NativeSelect
        id="demo-customized-select-native"
        value=''
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </NativeSelect>
        <button type="button">
          Set order
        </button>
        <button type="button" onClick={clearCart}>
          Remove All Items
        </button>
      </p>
    </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Cart,
  Component as CartComponent,
};
