import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const Component = ({className, productsAll}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h1>Twoja unikalna deska w zasięgu ręki</h1>
          <div className={styles.linkField}>
            <Link to={'/product/:id'} className={styles.link}>
              Konfigurator
            </Link>
          </div>
        </div>
        <div>
          <h2>W tym maczeliście palce:</h2>
        </div>
        <div className={styles.card}>
          {productsAll.map((product) => (
            <Card key={product.id} className={styles.card__item}>
              <CardActionArea
                href={`/product/${product.id}`}>
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
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  productsAll: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
