import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne } from '../../../redux/postsRedux';

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

const Component = ({className, productOne}) => {

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.postCard}>

        {productOne.map(product => (
          <div key={product.id}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.text}>{product.text}</p>
            <div className={styles.gallery}>
              <img className={styles.image} src={product.photo} alt='' />
              <img className={styles.image} src={product.photo2} alt='' />
              <img className={styles.image} src={product.photo3} alt='' />
            </div>
            <p className={styles.info}>{product.price}$</p>
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
            <Link className={styles.button} to={'/'}>
              <Fab
                size='small'
                color='default'
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
