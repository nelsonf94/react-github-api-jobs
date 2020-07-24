/** React imports */
import React from 'react';

/** Libs imports */

/** Components */
import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';
import Section from '../Section/Section';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


/**
 * Application Layout
 */
const Layout = (props) => {

  return (
    <Aux>
      <Navbar></Navbar>
      <Section>
        <Header></Header>
          Contendio de Aplicacion
        <Footer></Footer>
      </Section>
    </Aux>
  );
}

export default Layout;