import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import PropTypes from 'prop-types';
import Heading from '../components/Heading';

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,

};

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <Heading />
      <main className="main-layout">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;