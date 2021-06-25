import React from 'react';
import '../style/reset.css';
import MainWrapper from '../components/layout/MainWrapper';
import CommonCard from '../components/cards/CommonCard';
import CardWrapper from '../components/layout/CardWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import Button from '../components/Button';


const index = () => {
  return (
    <MainWrapper>
      <Header />
      
      <CardWrapper>

        <CommonCard 
          image='campfire'
          title="Dark Woods"
          body="There is something about a fire on a dark night, a fire shared with others, that pulls the gloom right out of you." 
        />

        <CommonCard 
          titleColor='dark'
          bodyColor='dark'
          image='coffee'
          title="Coffee, ah..."
        />

        <CommonCard 
          title="No Service?"
          body="No problem. You're connected out here." 
        />

      </CardWrapper>
                
      <Footer />
    </MainWrapper>
  )
}

export default index

