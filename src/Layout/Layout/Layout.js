/** React imports */
import React from 'react';
/** Layout Components */
import BlockView from '../BlockView/BlockView';
import Navbar from '../Navbar/Navbar';
import Hero from '../../Components/About/Hero';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
/** Main Components */
import SearchJob from '../../Components/SearchJob/SearchJob';

/**
 * Application Layout
 */
const Layout = (props) => {
  const {isLoading} = props;

  return (
    <BlockView blocking={isLoading}>
      <Navbar></Navbar>
      <main className="container-fluid">
        <Hero></Hero>
        <Header>Filtros de busqueda</Header>
        <SearchJob></SearchJob>
        <Footer></Footer>
      </main>
    </BlockView>
  );
}

export default Layout;