import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getContent, fetchProducts } from '../../../redux/productRedux';

import styles from './Homepage.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const Component = ({className, contentAll, productsAll, fetchProducts}) => {
  useEffect(() => {
    fetchProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.content}>

        {contentAll.map((content) => (
          <div key={content}>
            <img src={content.photo} alt=''></img>
            <h1 className={styles.title}>{content.title}</h1>
          </div>
        ))}

        <div className={styles.card}>
          {productsAll.map((product) => (
            <Card key={product._id} className={styles.card__item}>
              <CardActionArea
                href={`/product/${product._id}`}>
                <CardMedia
                  className={styles.image}
                  component='img'
                  image={product.photo}
                />
                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                  </Typography>
                  <div>
                    <Typography className={styles.client} component='p' variant='subtitle2'>
                      {product.title}
                    </Typography>
                    <Typography className={styles.client} component='p' variant='subtitle2'>
                      Price: {product.price}$
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  fetchProducts: PropTypes.any,
  className: PropTypes.string,
  productsAll: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      _id: PropTypes.string,
      title: PropTypes.string,
      photo: PropTypes.string,
      price: PropTypes.node,
    })
  ),
};

const mapStateToProps = state => ({
  productsAll: getAll(state),
  contentAll: getContent(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
})

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
