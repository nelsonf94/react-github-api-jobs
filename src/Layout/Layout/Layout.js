/** React imports */
import React from 'react';
/** Container Boostrarp */
import Container from 'react-bootstrap/Container';
/** Layout Components */
import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/** Basic Components */
import SearchJob from '../../Components/SearchJob/SearchJob';


/**
 * Application Layout
 */
const Layout = (props) => {

  return (
    <Aux>
      <Navbar></Navbar>
      <Container fluid>
        <Header>
          Filtros de busqueda
        </Header>
        <SearchJob></SearchJob>
        <Footer></Footer>
      </Container>
    </Aux>
  );
}

export default Layout;