import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CommonLayout = ({ children }) => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
