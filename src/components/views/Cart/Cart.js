import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Cart.module.scss';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

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
    window.location.reload();
  };

  const [quantity, setQuantity] = useState('');
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const cartProductsPrice = cartProducts.price * cartProducts.quantity || 0;

  return (
    <div className={clsx(className, styles.root)}>
      <h3>Your Products:</h3>
      <div className={styles.prodList}>
        <p className={styles.name}><span>Model:</span> {cartProducts.name}</p>
        <p className={styles.price}><span>Price:</span> ${cartProductsPrice}</p>
        <div className={styles.quantity}>
          <p><span>Quantity:</span></p>
          <Select
            value={cartProducts.quantity}
            className={styles.inner}
            onChange={handleChange}
            input={<BootstrapInput name="currency" id="currency-customized-select" />}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </div>
        <div className={styles.botton}>
        <Button
          variant="contained"
          color='default'
          href="/order"
        >
          Check Out
        </Button>
        </div>
      </div>
      <div className={styles.bootomCart}>
        <Button
          variant="contained"
          color='default'
          href="/"
        >
          Back to shop
        </Button>
        <Button
          variant="contained"
          color='default'
          onClick={clearCart}
        >
          Remove All Items
        </Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Cart,
  Component as CartComponent,
};
