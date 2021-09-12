import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Cart.module.scss';
import NativeSelect from '@material-ui/core/NativeSelect';
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

  const [setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h3>Your Products:</h3>
      <div className={styles.prodList}>
        <p className={styles.name}><span>Model:</span> {cartProducts.name}</p>
        <p className={styles.price}><span>Price:</span> {cartProducts.price}</p>
        <div className={styles.quantity}>
          <p><span>Quantity:</span> {cartProducts.quantity}</p>
          <NativeSelect
            id="quantity"
            value=''
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </NativeSelect>
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
