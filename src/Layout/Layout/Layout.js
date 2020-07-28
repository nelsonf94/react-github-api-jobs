/** React imports */
import React from 'react';
/** Components */
import BlockView from '../BlockView/BlockView';
import Navbar from '../Navbar/Navbar';
import Hero from '../../Components/About/Hero';
import Header from '../Header/Header';
import Keywords from '../../Components/Decorators/Keywords/Keywords';
import Footer from '../Footer/Footer';
import SearchJob from '../../Components/SearchJob/SearchJob';

/**
 * Application Layout
 */
const Layout = (props) => {
  const {isLoading} = props;

  return (
    <BlockView blocking={isLoading}>
      <Navbar />
      <main className="container-fluid">
        <Hero />
        <Header>
          <Keywords />
        </Header>
        <SearchJob />
        <Footer />
      </main>
    </BlockView>
  );
}

export default Layout;