/** React imports */
import React from 'react';

/** Font Awesome */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * Application Brand
 */
const Brand = (props) => {
  const {config} = props;

  return (
    <a class="navbar-brand">
      <FontAwesomeIcon icon={config.icon}></FontAwesomeIcon>
      <label>{config.title}</label>
    </a>
  );
}

export default Brand;