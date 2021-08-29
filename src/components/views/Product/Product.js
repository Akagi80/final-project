import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne } from '../../../redux/postsRedux';

import styles from './Product.module.scss';
import Fab from '@material-ui/core/Fab';

const Component = ({className, productOne}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.postCard}>

        {productOne.map(product => (
          <div key={product.id}>
            <img className={styles.image} src={product.photo} alt='' />
            <div>
            </div>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.text}>{product.text}</p>
            <p className={styles.info}>{product.price}$</p>
            <Link className={styles.button} to={'/'}>
              <Fab
                size='small'
                color='primary'
                aria-label='add'
                variant='extended'
              >
                Add to Cart
              </Fab>
            </Link>
          </div>

        ))}
      </div>
  </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  productOne: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photo: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state, props) => ({
  productOne: getOne(state, props.match.params.id),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
