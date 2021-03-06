import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productRedux';

import styles from './Product.module.scss';
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

const Component = ({className, productOne, fetchProductById}) => {
  useEffect(() => {
    fetchProductById();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [quantity, setQuantity] = useState('');
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  if (!productOne) {
    return <div></div>
  };

  const prodId = productOne._id,
        prodName = productOne.title,
        pordPrice = productOne.price,
        prodAmount = quantity;
  console.log(prodId, prodName, pordPrice, prodAmount);

  const cart = {
    id: prodId,
    name: prodName,
    price: pordPrice,
    quantity: prodAmount,
  };

  const sendToCart = () => {
    if(!prodAmount){
      alert('Please complete Quantity');
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
      window.open('/cart', '_self');
    }
  };

  //const cartProducts = JSON.parse(localStorage.getItem('cart')).products;
  //console.log(cartProducts);

  //const clearCart = () => {
  //  localStorage.removeItem('cart');
  //};

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.postCard}>

          <div key={productOne.id}>
            <p className={styles.title}>{productOne.title}</p>
            <p className={styles.text}>{productOne.text}</p>
            <div className={styles.gallery}>
              <img className={styles.image} src={productOne.photo} alt='' />
              <img className={styles.image} src={productOne.photo2} alt='' />
              <img className={styles.image} src={productOne.photo3} alt='' />
            </div>
            <p className={styles.info}><span>Price:</span> {productOne.price}</p>
            <div className={styles.quantity}>
              <p><span>Quantity:</span></p>
              <Select
                value={quantity}
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
              <Button
                variant="contained"
                color='default'
                onClick={sendToCart}
              >
                Add to Cart
              </Button>
          </div>
      </div>
  </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  fetchProductById: PropTypes.func,
  photo: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,

};

const mapStateToProps = (state, props) => ({
  productOne: getOneProduct(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchProductById: () => dispatch(fetchProductById(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
