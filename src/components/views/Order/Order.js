import React,  { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productRedux';
import { addOrder, fetchAddOrder } from '../../../redux/orderRedux';

import styles from './Order.module.scss';

const Component = ({className, addOrder, fetchAddOrder}) => {
  const cartProducts = (JSON.parse(localStorage.getItem('cart')) || {});

  const [order, setOrder] = useState({
    product: cartProducts.name ,
    price: cartProducts.price,
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    text: ''
  });

  const handleChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(order.firstname && order.lastname){
      addOrder(order);
      fetchAddOrder(order);
      console.log('add', order);

      setOrder({
        // id: '',
        product: '',
        price: '',
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        text: ''
      });
    } else {
      alert('Please complete all fields');
    }
  }

  return (
    <div className={clsx(className, styles.root)}>
      <form className={styles.form} action="/orders" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
        <h3>Your Products:</h3>
        <div className={styles.prodList}>
          <label className={styles.formInput}>
            Model: <input type="text"  placeholder={cartProducts.name} name="product" value={cartProducts.name} onChange={handleChange} />
          </label>
          <label className={styles.formInput}>
            Price: <input type="text" placeholder={cartProducts.price} name="price" value={cartProducts.price} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.clientData}>
          <label className={styles.formInput}>
            <input type="text" placeholder="First name" name="firstname" value={order.firstname} onChange={handleChange} />
          </label>
          <label className={styles.formInput}>
            <input type="text" placeholder="Last name" name="lastname" value={order.lastname} onChange={handleChange} />
          </label>
          <label className={styles.formInput}>
            <input type="phone" placeholder="Phone Number" name="phone" value={order.phone} onChange={handleChange} />
          </label>
          <label className={styles.formInput}>
            <input type="email" placeholder="Email" name="email" value={order.email} onChange={handleChange} />
          </label>
          <label className={styles.formTextarea}>
            <textarea  type="textarea" placeholder="More informations..." name="text" value={order.text} onChange={handleChange} rows="4" cols="50" />
          </label>
        </div>
        <button type="submit"><span>Submit</span></button>
      </form>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  orderAll: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
  fetchAddOrder: order => dispatch(fetchAddOrder(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
