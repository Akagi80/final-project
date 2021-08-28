import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './Homepage.module.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const Component = ({className, children}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h1>Twoja unikalna deska w zasięgu ręki</h1>
          <h3>Dzieki naszemu prostemu konfiguratorowi w łatwy sposób połączysz elementy w swoją wymarzoną deskę</h3>
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
          <Card className={styles.card__item}>
            <CardMedia
              className={styles.image}
              component='img'
              image='https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg'
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
                  Michał, Warszawa
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={styles.card__item}>
            <CardMedia
              className={styles.image}
              component='img'
              image='https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg'
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
                  Agnieszka, Kraków
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={styles.card__item}>
            <CardMedia
              className={styles.image}
              component='img'
              image='https://i.postimg.cc/63r08Sgf/pexels-edward-jenner-4252666.jpg'
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
                  Adam, Wrocław
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};
