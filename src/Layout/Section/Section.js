/** React imports */
import React from 'react';

/**
 * The Main Section, Body of Application
 */
const Section = (props) => {
  return (
    <section>
      {props.children}
    </section>
  )
};

export default Section;