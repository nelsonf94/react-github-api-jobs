/** React imports */
import React from 'react';

/**
 * List Element component
 */
const Li = (props) => {
  const {href, title, current} = props;
  return (
    <li class="nav-item active">
      <a class="nav-link" href={href}>{title}
        {(current) ? <span class="sr-only">(current)</span> : ''}
      </a>
    </li>
  );
}


/**
 * List for Navbar
 */
const Nav = (props) => {
  const {listOps} = props;

  const elems = listOps.map(e => (
    <Li title={e.title} href={e.current} current={e.current}></Li>
  ));

  return (<ul class="navbar-nav mr-auto">{elems}</ul>);
};

export default Nav;