import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Order.module.scss';

const Component = ({className, children}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <form className={styles.form}>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="phone" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
        <input type="textarea" placeholder="More informations..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Order,
  // Container as Order,
  Component as OrderComponent,
};
