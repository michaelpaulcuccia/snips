import React from 'react';
import '../style/reset.css';
import MainWrapper from '../components/layout/MainWrapper';
import Header from '../components/Header';
//import Button from '../components/Button';
import Footer from '../components/Footer';
import CommonCard from '../components/Cards/CommonCard';


const index = () => {
  return (
    <MainWrapper>
      <Header />
      
       
           <CommonCard
            image='coffee'
            title='Ah yes...'
            body='I always travel with a means to make myself a cup of Joe.'
          />
 
          <Footer />
    </MainWrapper>
  )
}

export default index

