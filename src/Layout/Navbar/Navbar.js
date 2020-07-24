/** React imports */
import React from 'react';

/** Navbar Brand Component */
import Brand from './Brand';
/** Nav Component */
import Nav from './Nav';

/** Font Awesome */
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons';

/**
 * Application Navbar
 */
const Navbar = (props) => {

  const brand = {
    icon: faCodeBranch,
    title: 'Job Search'
  };

  const listOps = [];

  return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Brand config={brand}></Brand>
      <button class="navbar-toggler" type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <Nav listOps={listOps}></Nav>
      </div>
    </nav>
  )
}

export default Navbar;