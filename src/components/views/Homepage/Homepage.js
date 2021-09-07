import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getContent } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const Component = ({className, contentAll, productsAll}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.content}>

        {contentAll.map((content) => (
          <div key={content}>
            <img src={content.photo} alt='image'></img>
            <h1 className={styles.title}>{content.title}</h1>
          </div>
        ))}

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
  title: PropTypes.node,
  price: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  productsAll: getAll(state),
  contentAll: getContent(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
