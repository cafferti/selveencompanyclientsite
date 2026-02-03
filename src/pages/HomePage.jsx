import React from 'react';
import Residencies from '../components/Residencies/Residencies';
import Values from '../components/Values/Values';
import Contacts from '../components/Contacts/Contacts';
import Saulltechhero from '../components/Hero/saulltechhero';

const HomePage = () => {
  return (
    <>
      <Saulltechhero />
      <Residencies/>
      <Values/>
      <Contacts/>
    </>
  );
};

export default HomePage;
