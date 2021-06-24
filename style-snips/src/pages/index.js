import React from 'react';
import '../style/reset.css';
import MainWrapper from '../components/layout/MainWrapper';
import CardWrapper from '../components/layout/CardWrapper';
import Header from '../components/Header';
import CampCard from '../components/Cards/CampCard';
import CoffeeCard from '../components/Cards/CoffeeCard';
import TentCard from '../components/Cards/TentCard';
import Footer from '../components/Footer';

//import Button from '../components/Button';


const index = () => {
  return (
    <MainWrapper>
      <Header />
      
      <CardWrapper>

        <CampCard          
          title="Let's Go Camping!"
          body='Body Text Goes Here. Something...and then something else.'      
        />
        <CoffeeCard          
          title="Cup O' Joe"
          body='Always ready for this!'      
        />
        <TentCard          
          title='TentLife'
          body="It's like van life, but without the cost of gas."      
        />
       

      </CardWrapper>
                
      <Footer />
    </MainWrapper>
  )
}

export default index

