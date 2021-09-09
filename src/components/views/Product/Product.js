import React,  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productRedux';

import styles from './Product.module.scss';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';

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

  const [setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  if (!productOne) {
    return <div></div>
  }

  const cart = {
    products: [
      {productOne},
    ]
  };

  const sendToCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const clearCart = () => {
    localStorage.removeItem('cart');
  }

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
            <p className={styles.info}>{productOne.price}$</p>
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
              <Fab
                size='small'
                color='default'
                aria-label='add'
                variant='extended'
                onClick={sendToCart}
              >
                Add to Cart
              </Fab>
              <Fab
                size='small'
                color='default'
                aria-label='add'
                variant='extended'
                onClick={clearCart}
              >
                Clear Cart
              </Fab>
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
