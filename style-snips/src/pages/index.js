import React from 'react';
import '../style/reset.css';
import MainWrapper from '../components/layout/MainWrapper';
import Header from '../components/Header';
//import Button from '../components/Button';
//import CommonCard from '../components/Cards/CommonCard';
import NextCard from '../components/cards/NextCard';
import Footer from '../components/Footer';

const index = () => {
  return (
    <MainWrapper>
      <Header />
      
       <NextCard/>
         
      <Footer />
    </MainWrapper>
  )
}

export default index

